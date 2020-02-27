namespace DiplomServer
{
    using CustomIdentityApp;
    using DiplomServer.Domain.Team.Models;
    using DiplomServer.Infrastructure;
	using Microsoft.AspNetCore.Hosting;
    using Microsoft.AspNetCore.Identity;
    using Microsoft.Extensions.DependencyInjection;
	using Microsoft.Extensions.Hosting;
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
					webBuilder.UseKestrel();
					webBuilder.UseStartup<Startup>();
				});
	}
}
