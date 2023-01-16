﻿using Microsoft.AspNetCore.Mvc;
using VideoProj.Models;

namespace VideoProj.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };

        private readonly ILogger<WeatherForecastController> _logger;
        private readonly exclaimDBContext _context;

        public WeatherForecastController(ILogger<WeatherForecastController> logger, exclaimDBContext context)
        {
            _logger = logger;
            _context = context;


        }

        [HttpGet]
        public IEnumerable<WeatherForecast> Get()
        {

             return Enumerable.Range(1, 5).Select(index => new WeatherForecast
              {
                Date = DateTime.Now.AddDays(index),
              TemperatureC = Random.Shared.Next(-20, 55),
                  Summary = Summaries[Random.Shared.Next(Summaries.Length)]
               })
             .ToArray();

        }
    }
}