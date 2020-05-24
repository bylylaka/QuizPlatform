namespace Diplom.Domain.Contexts.Core.Repositories
{
	using Diplom.Domain.Contexts.Notifications.Notifications.Models;
	using Diplom.Domain.Contexts.Notifications.Notifications.Services;
	using Diplom.Domain.Contexts.Notifications.Subscriptions.Services;
	using Diplom.Domain.Contexts.Quiz.Services;
	using Diplom.Domain.Contexts.Team.Services;
	using System;
	using System.Threading.Tasks;

	public interface IUnitOfWork : IDisposable
	{
		public IQuizRepository Quizes { get; }

		public IUserRepository Users { get; }

		public INotificationRepository<SiteNotification> SiteNotifications { get; }

		public ISubscriptionRepository Subscriptions { get; }

		public Task SaveAsync();
	}
}
