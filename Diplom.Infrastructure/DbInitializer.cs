namespace CustomIdentityApp
{
	using Diplom.Domain.Contexts.Team.Models;
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
