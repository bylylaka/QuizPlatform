//using DiplomServer.Domain.Team.Models;
//using Microsoft.AspNetCore.Identity;
//using System.Threading.Tasks;

//namespace DiplomServer.Infrastructure
//{
//	using DiplomServer.Domain.Team.Models;
//	using Microsoft.AspNetCore.Identity;
//	using Microsoft.EntityFrameworkCore;

//	public class DbInitializer
//	{
//		private readonly UserManager<User> _userManager;

//		private readonly RoleManager<User> _roleManager;

//		public DbInitializer(
//			UserManager<User> userManager,
//			RoleManager<User> roleManager)
//		{
//			_userManager = userManager;
//			_roleManager = roleManager;
//		}

//		public static void Initialize(ModelBuilder modelBuilder)
//		{
//			var adminRoleName = "admin";
//			var adminEmail = "maxim_arslanov@mail.ru";
//			var adminPassword = "qwe123";
//		}
//	}
//}

namespace CustomIdentityApp
{
	using DiplomServer.Domain.Team.Models;
	using Microsoft.AspNetCore.Identity;
	using System.Threading.Tasks;

	public class DbInitializer
	{
		public static async Task InitializeAsync(UserManager<User> userManager, RoleManager<Role> roleManager)
		{
			var adminEmail = "maxim_arslanov@mail.ru";
			var adminPassword = "!Fdertyg8";
			if (await roleManager.FindByNameAsync("admin") == null)
			{
				await roleManager.CreateAsync(new Role("admin"));
			}
			if (await roleManager.FindByNameAsync("user") == null)
			{
				await roleManager.CreateAsync(new Role("user"));
			}
			if (await userManager.FindByNameAsync(adminEmail) == null)
			{
				var admin = new User { Email = adminEmail, UserName = adminEmail };
				var result = await userManager.CreateAsync(admin, adminPassword);
				if (result.Succeeded)
				{
					await userManager.AddToRoleAsync(admin, "admin");
				}
			}
		}
	}
}
