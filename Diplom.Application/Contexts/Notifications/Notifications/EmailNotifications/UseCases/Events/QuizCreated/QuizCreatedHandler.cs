namespace Diplom.Application.Contexts.Notifications.Notifications.EmailNotifications.UseCases.Events.QuizCreated
{
	using Diplom.Application.Contexts.Core.Mediator;
	using Diplom.Application.Contexts.Quiz.UseCases.Events;
	using Diplom.Application.Contexts.Team.UseCases.Queries.GetCurrentUser;
	using Diplom.Domain.Contexts.Core.Repositories;
	using Diplom.Domain.Contexts.Emails.Services;
	using Diplom.Domain.Contexts.Notifications.Notifications.Models;
	using Diplom.WebApi.Contexts.Notifications.Controllers;
	using MediatR;
	using Microsoft.AspNetCore.Http;
	using System;
	using System.Net.Mail;
	using System.Net.Mime;
	using System.Text;
	using System.Threading;
	using System.Threading.Tasks;

	public class QuizCreatedHandler : IEventhandler<QuizCreated>
	{
		private readonly IRazorViewToStringRenderer _renderer;

		private readonly IMediator _mediator;

		private readonly IEmailService _emailService;

		private readonly IHttpContextAccessor _httpContextAccessor;

		private readonly IUnitOfWork _unitOfWork;

		public QuizCreatedHandler(
			IRazorViewToStringRenderer renderer,
			IEmailService emailService,
			IHttpContextAccessor httpContextAccessor,
			IUnitOfWork unitOfWork,
			IMediator mediator)
		{
			_renderer = renderer;
			_emailService = emailService;
			_httpContextAccessor = httpContextAccessor;
			_unitOfWork = unitOfWork;
			_mediator = mediator;
		}

		public async Task Handle(QuizCreated notification, CancellationToken cancellationToken)
		{
			var subscribers = await _unitOfWork.Subscriptions.GetSubscribers(notification.Quiz.UserId);

			var geCurrentUserResult = await _mediator.Send(new GetCurrentUser());

			var host = _httpContextAccessor.HttpContext.Request.Host.Value;
			var QuizCreatorPath = $"{host}/user/{notification.Quiz.UserId}";
			var QuizPath = $"{host}/quiz/{notification.Quiz.Id}";

			var model = new EmailNotification()
			{
				QuizCreatorPath = QuizCreatorPath,
				QuizPath = QuizPath,
				QuizTitle = notification.Quiz.Title,
				DateCreated = DateTime.Now,
				Reciever = geCurrentUserResult.User,
				ProducerName = notification.Quiz.User.UserName
			};

			var textbody = await _renderer.RenderViewToStringAsync("/Views/HelloworldText.cshtml", model);

			foreach (var subscriber in subscribers)
			{
				var message = new MailMessage("maxim.arslanov.1998@gmail.com", subscriber.Email)
				{
					Subject = "New Quiz was published!",
					Body = textbody
				};

				message.AlternateViews.Add(
					AlternateView.CreateAlternateViewFromString(textbody, Encoding.UTF8, MediaTypeNames.Text.Html));

				await _emailService.SendEmailAsync(message);
			}
		}
	}
}
