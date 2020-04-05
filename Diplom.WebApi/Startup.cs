namespace Diplom
{
	using AutoMapper;
	using Diplom.Domain.Files.Services;
	using Diplom.Domain.Quiz.Services;
	using Diplom.Domain.Team.Models;
	using Diplom.Domain.Team.Services;
	using Diplom.Domain.Team.Validators;
	using Diplom.Domain.utils.Countries;
	using Diplom.Infrastructure;
	using Diplom.Infrastructure.Qiuz;
	using Diplom.Infrastructure.Team.Repositories;
	using Diplom.Server.WebApi.Middleware;
	using FluentValidation.AspNetCore;
	using Microsoft.AspNetCore.Builder;
	using Microsoft.AspNetCore.Hosting;
	using Microsoft.AspNetCore.SpaServices.ReactDevelopmentServer;
	using Microsoft.EntityFrameworkCore;
	using Microsoft.Extensions.Configuration;
	using Microsoft.Extensions.DependencyInjection;
	using Microsoft.Extensions.Hosting;

	public class Startup
	{
		public Startup(IConfiguration configuration)
		{
			Configuration = configuration;
		}

		public IConfiguration Configuration { get; }

		public void ConfigureServices(IServiceCollection services)
		{
			services.AddAuthorization();
			services.AddControllers();

			services.AddDbContext<ApplicationContext>(options =>
				options.UseNpgsql(Configuration.GetConnectionString("DefaultConnection")));

			services.AddIdentity<User, Role>(options =>
			{
				options.User.AllowedUserNameCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZéöó" +
				"êåíãøùçõúôûâàïğîëäæıÿ÷ñìèòüáşÉÖÓÊÅÍÃØÙÇÕÚÔÛÂÀÏĞÎËÄÆİß×ÑÌÈÒÜÁŞ0123456789-._@+";
			})
				.AddEntityFrameworkStores<ApplicationContext>();

			services.AddAutoMapper(typeof(Startup));

			services.AddMvc()
				.AddFluentValidation(fv => fv.RegisterValidatorsFromAssemblyContaining<RegistrationValidator>());

			services.AddScoped<IUserService, UserService>();
			services.AddScoped<IRoleService, RoleService>();
			services.AddScoped<IFileService, FileService>();
			services.AddScoped<IQuizService, QuizService>();
			services.AddScoped<IUserRepository, UserRepository>();
			services.AddScoped<IRoleRepository, RoleRepository>();
			services.AddScoped<IQuizRepository, QuizRepository>();
			services.AddScoped<CountriesHelper>();

			services.AddSpaStaticFiles(configuration =>
			{
				configuration.RootPath = "../Diplom.Client/build";
			});
		}

		public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
		{
			if (env.IsDevelopment())
			{
				app.UseDeveloperExceptionPage();
			}
			else
			{
				app.UseExceptionHandler("/Error");
				app.UseHsts();
			}

			app.UseHttpStatusCodeExceptionMiddleware();

			app.UseHttpsRedirection();
			app.UseStaticFiles();
			app.UseSpaStaticFiles();

			app.UseRouting();

			app.UseAuthentication();
			app.UseAuthorization();

			app.UseEndpoints(endpoints =>
			{
				endpoints.MapControllerRoute(
					name: "default",
					pattern: "{controller}/{action=Index}/{id?}");
			});

			app.UseSpa(spa =>
			{
				spa.Options.SourcePath = "../Diplom.Client";

				if (env.IsDevelopment())
				{
					spa.UseReactDevelopmentServer(npmScript: "start");
				}
			});
		}
	}
}
