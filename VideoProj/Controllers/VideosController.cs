using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using VideoProj.Models;

namespace VideoProj.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VideosController : ControllerBase
    {

        private readonly exclaimDBContext _context;
        public VideosController(exclaimDBContext context)
        {
            _context = context;
        }

        // GET: api/Videos
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Video>>> GetVideos()
        {

            var test = await _context.Videos.ToListAsync();
            return Ok(test);
        }

        [HttpPost]
        public async Task<ActionResult<Video>> PostVideo(Video video)
        {

            _context.Videos.Add(video);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetVideo", new { id = video.Id }, video);
        }
    }
}
