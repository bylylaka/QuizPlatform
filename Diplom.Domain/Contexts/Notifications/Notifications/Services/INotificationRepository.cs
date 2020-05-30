namespace Diplom.Domain.Contexts.Notifications.Notifications.Services
{
	using Diplom.Domain.Contexts.Notifications.Notifications.Models;
	using System.Collections.Generic;
	using System.Linq;
	using System.Threading.Tasks;

	public interface INotificationRepository<T> where T : BaseNotification
	{
		IQueryable<SiteNotification> GetNotificationsTracking();

		Task SaveNotifications(List<T> notifications);

		Task<List<T>> GetNotificationsByRecieverId(int id);
	}
}
