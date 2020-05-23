namespace Diplom.Infrastructure.Contexts.Notifications.Repositories
{
	using Diplom.Domain.Contexts.Notifications.Models;
	using Diplom.Domain.Contexts.Notifications.Services;
	using Microsoft.EntityFrameworkCore;
	using System.Threading.Tasks;

	public class NotificationRepository : INotificationRepository
	{
		private readonly ApplicationContext _appContext;

		public NotificationRepository(ApplicationContext appContext)
		{
			_appContext = appContext;
		}

		public async Task AddSubsctiption(Subscription subscription)
		{
			await _appContext.AddAsync(subscription);
		}

		public async Task<Subscription> GetSubscription(int producerId, int consumerId)
		{
			return await _appContext.Subscriptions
				.FirstOrDefaultAsync(s => s.ProducerId == producerId && s.ConsumerId == consumerId);
		}

		public async Task RemoveSubsctiption(Subscription subscription)
		{
			_appContext.Remove(subscription);
		}
	}
}
