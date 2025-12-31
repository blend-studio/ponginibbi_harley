using Backend.Data;
using Backend.Models;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json; // Usiamo Newtonsoft per compatibilità massima col tuo SDK
using PublisherModels; // Il namespace delle tue classi SDK
using System.Text.Json;

namespace Backend.Services
{
    public class ImporterService : BackgroundService
    {
        private readonly IServiceProvider _serviceProvider;
        private readonly ILogger<ImporterService> _logger;
        // Inserisci qui l'URL quando te lo daranno
        private const string FEED_URL = "https://publisher.websoft.it/feed/ponginibbi_harley/data.json";

        public ImporterService(IServiceProvider serviceProvider, ILogger<ImporterService> logger)
        {
            _serviceProvider = serviceProvider;
            _logger = logger;
        }

        protected override async Task ExecuteAsync(CancellationToken stoppingToken)
        {
            while (!stoppingToken.IsCancellationRequested)
            {
                _logger.LogInformation("⏳ Avvio importazione dati...");
                try
                {
                    await ImportDataAsync();
                }
                catch (Exception ex)
                {
                    _logger.LogError(ex, "Errore durante l'importazione");
                }

                // Aspetta 1 ora prima di rieseguire
                await Task.Delay(TimeSpan.FromHours(1), stoppingToken);
            }
        }

        private async Task ImportDataAsync()
        {
            using (var scope = _serviceProvider.CreateScope())
            {
                var dbContext = scope.ServiceProvider.GetRequiredService<AppDbContext>();

                // 1. Scarica il JSON (qui simulo la lettura da file locale per test)
                // In produzione usa HttpClient per scaricare da FEED_URL
                string jsonContent = "";
                if (File.Exists("data.json"))
                {
                    jsonContent = await File.ReadAllTextAsync("data.json");
                }
                else
                {
                    _logger.LogWarning("File data.json non trovato. Passo alla modalità HTTP (da implementare)");
                    return;
                }

                // 2. Deserializza usando le classi SDK
                var rootData = JsonConvert.DeserializeObject<RootData>(jsonContent);

                if (rootData?.Ads == null) return;

                int count = 0;
                foreach (var ad in rootData.Ads)
                {
                    // 3. Filtro HARLEY-DAVIDSON
                    // Public potrebbe essere null, controlliamo
                    if (ad.Public == null || string.IsNullOrEmpty(ad.Public.Brand)) continue;

                    if (!ad.Public.Brand.ToUpper().Contains("HARLEY") && !ad.Public.Brand.ToUpper().Contains("H-D"))
                    {
                        continue; // Salta se non è Harley
                    }

                    // 4. Mappatura SDK -> Nostro DB
                    var bike = await dbContext.Bikes.FindAsync(ad.Vid);
                    bool isNew = bike == null;

                    if (isNew)
                    {
                        bike = new BikeEntity { Vid = ad.Vid };
                        await dbContext.Bikes.AddAsync(bike);
                    }

                    // Aggiorniamo i campi
                    bike.Brand = ad.Public.Brand;
                    bike.Model = ad.Public.Model;
                    bike.Version = ad.Public.Version;
                    // Prezzo: prova WebPrice, se null usa BasePrice
                    bike.Price = ad.Public.WebPrice ?? ad.Business?.BasePrice ?? 0;
                    bike.Mileage = ad.Public.MileageKm ?? 0;
                    bike.RegistrationDate = ad.Public.RegistrationDate ?? DateTime.MinValue;
                    bike.Status = ad.Public.Status.ToString(); // Converte l'enum in stringa
                    bike.LastUpdated = DateTime.UtcNow;

                    // Immagini: prendiamo la prima come copertina (se esiste)
                    if (ad.Images != null && ad.Images.Count > 0)
                    {
                        bike.ImageUrl = ad.Images.FirstOrDefault()?.ImageUrl;
                    }

                    count++;
                }

                await dbContext.SaveChangesAsync();
                _logger.LogInformation($"✅ Importazione completata. Processate {count} Harley Davidson.");
            }
        }
    }
}