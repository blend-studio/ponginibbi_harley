using BackendHarley.Data;
using BackendHarley.Services;
using Microsoft.EntityFrameworkCore;
using System;

var builder = WebApplication.CreateBuilder(args);

// 1. CONFIGURAZIONE MYSQL
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString))
);

// Registra i controller
builder.Services.AddControllers();

// Registra il servizio di importazione (Cron Job)
builder.Services.AddHostedService<ImporterService>();

var app = builder.Build();

// Configurazione pipeline HTTP
app.MapControllers();

app.Run();