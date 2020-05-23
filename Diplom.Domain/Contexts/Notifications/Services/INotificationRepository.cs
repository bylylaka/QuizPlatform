namespace Diplom.Domain.Contexts.Notifications.Services
{
	using Diplom.Domain.Contexts.Notifications.Models;
	using System.Threading.Tasks;

	public interface INotificationRepository
	{
		Task<Subscription> GetSubscription(int producerId, int consumerId);

		Task AddSubsctiption(Subscription subscription);

		Task RemoveSubsctiption(Subscription subscription);
	}
}
