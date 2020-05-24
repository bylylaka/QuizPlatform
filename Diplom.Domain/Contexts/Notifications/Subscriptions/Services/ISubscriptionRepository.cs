namespace Diplom.Domain.Contexts.Notifications.Subscriptions.Services
{
	using Diplom.Domain.Contexts.Notifications.Subscriptions.Models;
	using Diplom.Domain.Contexts.Team.Models;
	using System.Collections.Generic;
	using System.Threading.Tasks;

	public interface ISubscriptionRepository
	{
		public Task<Subscription> GetSubscription(int producerId, int consumerId);

		public Task<List<User>> GetSubscribers(int producerId);

		public Task AddSubsctiption(Subscription subscription);

		public Task RemoveSubsctiption(Subscription subscription);
	}
}
