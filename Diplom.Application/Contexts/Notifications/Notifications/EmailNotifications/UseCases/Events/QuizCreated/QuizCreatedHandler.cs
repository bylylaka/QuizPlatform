namespace Diplom.Application.Contexts.Notifications.Notifications.EmailNotifications.UseCases.Events.QuizCreated
{
	using Diplom.Application.Contexts.Core.Mediator;
	using Diplom.Application.Contexts.Quiz.UseCases.Events;
	using Diplom.Domain.Contexts.Emails.Models;
	using Diplom.Domain.Contexts.Emails.Services;
	using Diplom.WebApi.Contexts.Notifications.Controllers;
	using System;
	using System.Net.Mail;
	using System.Threading;
	using System.Threading.Tasks;

	public class QuizCreatedHandler : IEventhandler<QuizCreated>
	{
		private readonly IRazorViewToStringRenderer _renderer;

		private readonly IEmailService _emailService;

		public QuizCreatedHandler(
			IRazorViewToStringRenderer renderer,
			IEmailService emailService)
		{
			_renderer = renderer;
			_emailService = emailService;
		}

		public async Task Handle(QuizCreated notification, CancellationToken cancellationToken)
		{
			var model = new HelloWorldViewModel("https://www.google.com");

			try
			{
				var textBody = await _renderer.RenderViewToStringAsync("/Views/HelloWorldText.cshtml", model);

				var message = new MailMessage("maxim.arslanov.1998@gmail.com", "maxim.arslanov@myget-it.com")
				{
					Subject = "Hello World!",
					Body = textBody
				};

				await _emailService.SendEmailAsync(message);
			}
			catch (Exception e)
			{
				throw e;
			}
		}
	}
}
