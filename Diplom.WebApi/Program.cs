namespace Diplom
{
	using CustomIdentityApp;
	using Diplom.Domain.Contexts.Team.Models;
	using Diplom.Infrastructure;
	using Microsoft.AspNetCore.Hosting;
	using Microsoft.AspNetCore.Identity;
	using Microsoft.Extensions.DependencyInjection;
	using Microsoft.Extensions.Hosting;
	using System.IO;
	using System.Threading.Tasks;

	public class Program
	{
		public static async Task Main(string[] args)
		{
			var host = CreateHostBuilder(args).Build();

			using (var scope = host.Services.CreateScope())
			{
				var services = scope.ServiceProvider;
				var context = services.GetRequiredService<ApplicationContext>();

				var userManager = services.GetRequiredService<UserManager<User>>();
				var rolesManager = services.GetRequiredService<RoleManager<Role>>();
				await DbInitializer.InitializeAsync(userManager, rolesManager);
			}

			host.Run();
		}

		public static IHostBuilder CreateHostBuilder(string[] args) =>
			Host.CreateDefaultBuilder(args)
				.ConfigureWebHostDefaults(webBuilder =>
				{
					webBuilder.UseWebRoot(Path.Combine(Directory.GetCurrentDirectory(), "wwwroot"));
					webBuilder.UseStartup<Startup>();	
				});
	}
}
