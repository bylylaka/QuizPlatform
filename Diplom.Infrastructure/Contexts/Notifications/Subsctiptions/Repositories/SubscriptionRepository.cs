namespace Diplom.Infrastructure.Contexts.Notifications.Subsctiptions.Repositories
{
	using Diplom.Domain.Contexts.Notifications.Subscriptions.Models;
	using Diplom.Domain.Contexts.Notifications.Subscriptions.Services;
	using Diplom.Domain.Contexts.Team.Models;
	using Microsoft.EntityFrameworkCore;
	using System.Collections.Generic;
	using System.Linq;
	using System.Threading.Tasks;

	public class SubscriptionRepository : ISubscriptionRepository
	{
		private readonly ApplicationContext _appContext;

		public SubscriptionRepository(ApplicationContext appContext)
		{
			_appContext = appContext;
		}

		public async Task AddSubsctiption(Subscription subscription)
		{
			await _appContext.AddAsync(subscription);
		}

		public async Task<List<User>> GetSubscribers(int producerId)
		{
			return await _appContext.Subscriptions
				.Include(x => x.Consumer)
				.Where(x => x.ProducerId == producerId)
				.Select(x => x.Consumer)
				.ToListAsync();
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
