namespace Diplom.WebApi.Contexts.Notifications.Controllers
{
	using Diplom.Application.Contexts.Notifications.Notifications.SiteNotifications.UseCases.Queries.GetSiteNotifications;
	using Diplom.Application.Contexts.Notifications.Subscriptions.UseCases.Commands.ChagneSubscriptionStatus;
	using Diplom.Application.Contexts.Notifications.Subscriptions.UseCases.Queries.GetSubscriptionStatus;
	using Diplom.Application.Contexts.Team.UseCases.Queries.GetMyProfileSimplified;
	using MediatR;
	using Microsoft.AspNetCore.Authorization;
	using Microsoft.AspNetCore.Mvc;
	using System.Threading.Tasks;
	using MailKit.Net.Smtp;
	using MimeKit;
	using System;
	using FluentEmail.Core;
	using System.Text;
	using System.Net.Mime;
	using System.Net.Mail;
	using System.Net;
	using Microsoft.AspNetCore.Hosting;
	using System.IO;

	[Route("api/[controller]")]
	public class NotificationController : Controller
	{
		private readonly IMediator _mediator;

		private readonly IRazorViewToStringRenderer _renderer;

		private readonly IWebHostEnvironment _env;

		public NotificationController(
			IMediator mediator,
			IRazorViewToStringRenderer renderer,
			IWebHostEnvironment env)
		{
			_mediator = mediator;
			_renderer = renderer;
			_env = env;
		}

		[Authorize]
		[HttpGet]
		[Route("[action]/{producerId}")]
		public async Task<IActionResult> GetSubscriptionStatus(int producerId)
		{
			var consumer = await _mediator.Send(new GetMyProfileSimplified(User));

			var query = new GetSubscriptionStatus(consumer.Id, producerId);
			var result = await _mediator.Send(query);

			return Ok(result.Subscribe);
		}

		[Authorize]
		[HttpPut]
		[Route("[action]")]
		public async Task<IActionResult> ChagneSubsciptionStatus([FromBody] ChagneSubscriptionStatus command)
		{
			var consumer = await _mediator.Send(new GetMyProfileSimplified(User));

			command.ConsumerId = consumer.Id;

			var result = await _mediator.Send(command);

			return Ok(result);
		}

		[Authorize]
		[HttpGet]
		[Route("[action]")]
		public async Task<IActionResult> GetSiteNotifications()
		{
			var consumer = await _mediator.Send(new GetMyProfileSimplified(User));

			var query = new GetSiteNotifications(consumer.Id);
			var result = await _mediator.Send(query);


			//var message = new MimeMessage();
			//message.To.Add(new MailboxAddress("maxim.arslanov@myget-it.com"));
			//message.From.Add(new MailboxAddress("maxim.arslanov.1998@gmail.com"));
			//message.Subject = "subject";
			//message.Body = new TextPart(MimeKit.Text.TextFormat.Html)
			//{
			//	Text = "Привет!"
			//};

			var model = new HelloWorldViewModel("https://www.google.com");

			var textBody = await _renderer.RenderViewToStringAsync("/Contexts/Notifications/Views/HelloWorldText.cshtml", model);

			var message = new MailMessage("maxim.arslanov@myget-it.com", "maxim.arslanov@myget-it.com")
			{
				Subject = "Hello World!",
				Body = textBody
			};

			using (var client = new System.Net.Mail.SmtpClient("smtp.gmail.com"))
			{
				client.EnableSsl = true;
				client.Credentials = new NetworkCredential("maxim.arslanov.1998@gmail.com", "Zampsa1998");
				await client.SendMailAsync(message);

				client.Send(message);
			}



			return Ok(result.Notifications);
		}
	}
}
