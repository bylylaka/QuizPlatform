namespace Diplom.Infrastructure.Contexts.Core.Repositories
{
	using Diplom.Domain.Contexts.Core.Repositories;
	using Diplom.Domain.Contexts.Notifications.Notifications.Models;
	using Diplom.Domain.Contexts.Notifications.Notifications.Services;
	using Diplom.Domain.Contexts.Notifications.Subscriptions.Services;
	using Diplom.Domain.Contexts.Quiz.Services;
	using Diplom.Domain.Contexts.Team.Services;
	using System;
	using System.Threading.Tasks;

	public class UnitOfWork : IUnitOfWork
	{
		private readonly ApplicationContext _appContext;

		public UnitOfWork(
			ApplicationContext appContext,
			IQuizRepository quizRepository,
			IUserRepository userRepository,
			ISubscriptionRepository subscriptionRepository,
			INotificationRepository<SiteNotification> siteNotificationRepository)
		{
			_appContext = appContext;
			Quizes = quizRepository;
			Users = userRepository;
			Subscriptions = subscriptionRepository;
			SiteNotifications = siteNotificationRepository;
		}

		public IQuizRepository Quizes { get; }

		public IUserRepository Users { get; }

		public ISubscriptionRepository Subscriptions { get; }

		public INotificationRepository<SiteNotification> SiteNotifications { get; }

		public async Task SaveAsync()
		{
			await _appContext.SaveChangesAsync();
		}

		private bool disposed = false;

		public virtual void Dispose(bool disposing)
		{
			if (!this.disposed)
			{
				if (disposing)
				{
					_appContext.Dispose();
				}
				this.disposed = true;
			}
		}

		public void Dispose()
		{
			Dispose(true);
			GC.SuppressFinalize(this);
		}
	}
}
