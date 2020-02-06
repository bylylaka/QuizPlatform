namespace DiplomServer.Infrastructure
{
	using DiplomServer.Infrastructure.Models;
	using Microsoft.EntityFrameworkCore;

	public class ApplicationContext : DbContext
	{
		public DbSet<User> Users { get; set; }

		public DbSet<Role> Roles { get; set; }

		public ApplicationContext(DbContextOptions options) : base(options)
		{
			Database.EnsureCreated();
		}

		protected override void OnModelCreating(ModelBuilder modelBuilder)
		{
			modelBuilder.Entity<User>(user =>
			{
				user.Property(u => u.Id)
				.ValueGeneratedOnAdd();

				user.HasIndex(u => u.Email)
				.IsUnique();
			});

			modelBuilder.Entity<Role>(role =>
			{
				role.Property(r => r.Id)
				.ValueGeneratedOnAdd();

				role.HasIndex(r => r.Name)
				.IsUnique();
			});

			DbInitializer.Initialize(modelBuilder);
		}
	}
}
