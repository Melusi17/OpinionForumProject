using Microsoft.EntityFrameworkCore;
using Opinion_Forum.Models;

namespace Opinion_Forum.Data
{
    public class ApplicationDbContext : DbContext
    {
        // Constructor - this is what connects our DbContext to the app
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        // This creates a table called "Users" in the database
        public DbSet<User> Users { get; set; }

        // This method lets us configure things when the database is being created
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Make sure email addresses are unique (no two users can have the same email)
            modelBuilder.Entity<User>()
                .HasIndex(u => u.Email)
                .IsUnique();
        }
    }
}