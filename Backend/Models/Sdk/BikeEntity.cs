using System.ComponentModel.DataAnnotations;

namespace Backend.Models
{
    public class BikeEntity
    {
        [Key]
        public string Vid { get; set; } // ID univoco di Infinity (es. U23832)
        public string Brand { get; set; }
        public string Model { get; set; }
        public string Version { get; set; }
        public double Price { get; set; }
        public int Mileage { get; set; }
        public DateTime RegistrationDate { get; set; }
        public string Status { get; set; } // "In stock", "Sold"
        public string ImageUrl { get; set; } // Salviamo la prima foto per la lista
        public DateTime LastUpdated { get; set; }
    }
}