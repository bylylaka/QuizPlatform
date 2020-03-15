namespace DiplomServer.Infrastructure
{
	using DiplomServer.Domain.Team.Models;
	using Microsoft.AspNetCore.Identity;
	using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
	using Microsoft.EntityFrameworkCore;

	public class ApplicationContext : IdentityDbContext<User, Role, int, IdentityUserClaim<int>, IdentityUserRole<int>,
		IdentityUserLogin<int>, IdentityRoleClaim<int>, IdentityUserToken<int>>
	{
		public ApplicationContext(DbContextOptions options) : base(options)
		{
			Database.EnsureCreated();
		}

		protected override void OnModelCreating(ModelBuilder modelBuilder)
		{
			base.OnModelCreating(modelBuilder);
		}
	}
}
