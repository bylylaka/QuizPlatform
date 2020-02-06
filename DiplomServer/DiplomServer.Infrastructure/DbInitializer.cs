namespace DiplomServer.Infrastructure
{
	using DiplomServer.Infrastructure.Models;
	using Microsoft.EntityFrameworkCore;

	public static class DbInitializer
	{
		public static void Initialize(ModelBuilder modelBuilder)
		{
			var adminRoleName = "admin";
			var userRoleName = "user";
			var adminEmail = "maxim_arslanov@mail.ru";
			var adminPassword = "qwe123";

			var adminRole = new Role
			{
				Id = 1,
				Name = adminRoleName
			};
			var userRole = new Role
			{
				Id = 2,
				Name = userRoleName
			};

			var adminUser = new User
			{
				Id = 1,
				Email = adminEmail,
				Password = adminPassword,
				RoleId = adminRole.Id
			};

			modelBuilder.Entity<Role>().HasData(new[] { adminRole, userRole });
			modelBuilder.Entity<User>().HasData(new[] { adminUser });
		}
	}
}
