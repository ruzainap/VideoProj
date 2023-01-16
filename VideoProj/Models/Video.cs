using System;
using System.Collections.Generic;

namespace VideoProj.Models
{
    public partial class Video
    {
        public int Id { get; set; }
        public string VideoLinks { get; set; } = null!;
        public int UserId { get; set; }

        public virtual User User { get; set; } = null!;
    }
}
