using Backend.Models;
using BackendHarley.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace Backend.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<BikeEntity> Bikes { get; set; }
    }
}