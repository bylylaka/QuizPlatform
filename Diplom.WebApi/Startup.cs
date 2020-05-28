namespace Diplom
{
	using AutoMapper;
	using Diplom.Application.Contexts.Quiz.UseCases.Commands.AnswerQuiz;
	using Diplom.Application.Contexts.Quiz.UseCases.Commands.CreateQuiz;
	using Diplom.Application.Contexts.Quiz.UseCases.Queries.GetQuiz;
	using Diplom.Application.Contexts.Quiz.UseCases.Queries.GetStatistic;
	using Diplom.Application.Contexts.Quiz.UseCases.Queries.GetUserQuizList;
	using Diplom.Application.Contexts.Team.UseCases.Commands.Login;
	using Diplom.Application.Contexts.Team.UseCases.Commands.Logout;
	using Diplom.Application.Contexts.Team.UseCases.Commands.Register;
	using Diplom.Application.Contexts.Team.UseCases.Commands.UpdateProfile;
	using Diplom.Application.Contexts.Team.UseCases.Queries.GetMyProfileSimplified;
	using Diplom.Application.Contexts.Team.UseCases.Queries.GetUser;
	using Diplom.Application.Contexts.Team.UseCases.Queries.SearchByWord;
	using Diplom.Application.Contexts.Team.Validators;
	using Diplom.Domain.Contexts.Core.Repositories;
	using Diplom.Domain.Contexts.Files.Services;
	using Diplom.Domain.Contexts.Notifications.Notifications.Models;
	using Diplom.Domain.Contexts.Notifications.Notifications.Services;
	using Diplom.Domain.Contexts.Notifications.Subscriptions.Services;
	using Diplom.Domain.Contexts.Quiz.Services;
	using Diplom.Domain.Contexts.Team.Models;
	using Diplom.Domain.Contexts.Team.Services;
	using Diplom.Domain.utils.Countries;
	using Diplom.Infrastructure;
	using Diplom.Infrastructure.Contexts.Core.Repositories;
	using Diplom.Infrastructure.Contexts.Notifications.Notifications.Repositories;
	using Diplom.Infrastructure.Contexts.Notifications.Subsctiptions.Repositories;
	using Diplom.Infrastructure.Contexts.Quiz.Repositories;
	using Diplom.Infrastructure.Contexts.Team.Repositories;
	using Diplom.WebApi.Contexts.Core.Middleware;
	using Diplom.WebApi.Contexts.Notifications.Controllers;
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
				options.User.AllowedUserNameCharacters = null;
			})
				.AddEntityFrameworkStores<ApplicationContext>();

			services.AddAutoMapper(typeof(Startup));

			services.AddMvc()
				.AddFluentValidation(fv => fv.RegisterValidatorsFromAssemblyContaining<RegistrationValidator>());

			services.AddMediatR(typeof(LoginHandler).Assembly,
				typeof(RegisterHandler).Assembly,
				typeof(LogoutHandler).Assembly,
				typeof(UpdateProfileHandler).Assembly,
				typeof(GetMyProfileSimplifiedHandler).Assembly,
				typeof(GetUserHandler).Assembly,
				typeof(SearchByWordHandler).Assembly,

				typeof(AnswerQuizHandler).Assembly,
				typeof(CreateQuizHandler).Assembly,
				typeof(GetQuizHandler).Assembly,
				typeof(GetStatisticHandler).Assembly,
				typeof(GetUserQuizListHandler).Assembly,
				typeof(Application.Contexts.Quiz.UseCases.Queries.SearchByWord.SearchByWordHandler).Assembly);

			services.AddTransient<IRazorViewToStringRenderer, RazorViewToStringRenderer>();
			services.AddScoped<IFileService, FileService>();
			services.AddScoped<IUserRepository, UserRepository>();
			services.AddScoped<IQuizRepository, QuizRepository>();
			services.AddScoped<ISubscriptionRepository, SubscriptionRepository>();
			services.AddScoped<INotificationRepository<SiteNotification>, SiteNotificationRepository>();
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
