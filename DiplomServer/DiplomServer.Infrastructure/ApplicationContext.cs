using DiplomServer.Infrastructure.Models;
using Microsoft.EntityFrameworkCore;

namespace DiplomServer.Infrastructure
{
	public class ApplicationContext : DbContext
	{
		public DbSet<User> Users { get; set; }

		public ApplicationContext(DbContextOptions options) : base(options)
		{
			Database.EnsureCreated();
		}

		protected override void OnModelCreating(ModelBuilder modelBuilder)
		{
			modelBuilder.Entity<User>().ToTable("user");
		}
	}
}
