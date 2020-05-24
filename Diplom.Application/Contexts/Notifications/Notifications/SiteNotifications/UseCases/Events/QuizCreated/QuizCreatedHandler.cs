namespace Diplom.Application.Contexts.Notifications.Notifications.SiteNotifications.UseCases.Events.QuizCreated
{
	using Diplom.Application.Contexts.Core.Mediator;
	using Diplom.Application.Contexts.Quiz.UseCases.Events;
	using Diplom.Domain.Contexts.Core.Repositories;
	using Diplom.Domain.Contexts.Notifications.Notifications.Models;
	using System;
	using System.Linq;
	using System.Threading;
	using System.Threading.Tasks;

	public class QuizCreatedHandler : IEventhandler<QuizCreated>
	{
		private readonly IUnitOfWork _unitOfWork;

		public QuizCreatedHandler(IUnitOfWork unitOfWork)
		{
			_unitOfWork = unitOfWork;
		}

		public async Task Handle(QuizCreated notification, CancellationToken cancellationToken)
		{
			var subscribers = await _unitOfWork.Subscriptions.GetSubscribers(notification.Quiz.UserId);

			var notifications = subscribers.Select(subscriber => new SiteNotification()
			{
				ProducerId = notification.Quiz.Id,
				ProducerName = notification.Quiz.User.UserName,
				QuizId = notification.Quiz.Id,
				QuizTitle = notification.Quiz.Title,
				RecieverId = subscriber.Id,
				DateCreated = DateTime.Now,
			}).ToList();

			await _unitOfWork.SiteNotifications.SaveNotifications(notifications);

			await _unitOfWork.SaveAsync();
		}
	}
}
