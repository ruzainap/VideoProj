using System;
using System.Collections.Generic;

namespace VideoProj.Models
{
    public partial class User
    {
        public User()
        {
            Videos = new HashSet<Video>();
        }

        public int Id { get; set; }
        public string Email { get; set; } = null!;
        public string Password { get; set; } = null!;

        public virtual ICollection<Video> Videos { get; set; }
    }
}
