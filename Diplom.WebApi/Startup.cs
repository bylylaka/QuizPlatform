namespace Diplom
{
	using AutoMapper;
	using Diplom.Application.Contexts.Team.UseCases.Login;
    using Diplom.Application.Contexts.Team.UseCases.Logout;
    using Diplom.Application.Contexts.Team.UseCases.Register;
    using Diplom.Domain.Contexts.Core.Repositories;
    using Diplom.Domain.Contexts.Files.Services;
    using Diplom.Domain.Contexts.Quiz.Services;
    using Diplom.Domain.Contexts.Team.Models;
	using Diplom.Domain.Contexts.Team.Services;
	using Diplom.Domain.utils.Countries;
	using Diplom.Infrastructure;
	using Diplom.Infrastructure.Contexts.Core.Repositories;
	using Diplom.Infrastructure.Contexts.Quiz.Repositories;
    using Diplom.Infrastructure.Contexts.Team.Repositories;
    using Diplom.WebApi.Contexts.Core.Middleware;
    using Diplom.WebApi.Contexts.Team.Validators;
    using FluentValidation.AspNetCore;
	using MediatR;
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

			services.AddMediatR(typeof(Login).Assembly,
				typeof(RegisterHandler).Assembly,
				typeof(Logout).Assembly);

			services.AddScoped<IUserService, UserService>();
			services.AddScoped<IFileService, FileService>();
			services.AddScoped<IQuizService, QuizService>();
			services.AddScoped<IUserRepository, UserRepository>();
			services.AddScoped<IQuizRepository, QuizRepository>();
			services.AddScoped<IUnitOfWork, UnitOfWork>();
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
