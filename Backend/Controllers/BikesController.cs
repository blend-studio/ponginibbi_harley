using Backend.Data;
using Backend.Models;
using BackendHarley.Data;
using BackendHarley.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BikesController : ControllerBase
    {
        private readonly AppDbContext _context;

        public BikesController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/bikes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<BikeEntity>>> GetBikes()
        {
            // Ritorna solo le moto "In stock" o "marketable"
            return await _context.Bikes
                                 .Where(b => b.Status == "In stock")
                                 .ToListAsync();
        }

        // GET: api/bikes/U12345
        [HttpGet("{vid}")]
        public async Task<ActionResult<BikeEntity>> GetBike(string vid)
        {
            var bike = await _context.Bikes.FindAsync(vid);

            if (bike == null)
            {
                return NotFound();
            }

            return bike;
        }
    }
}