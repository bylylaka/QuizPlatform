namespace Diplom.Infrastructure.Contexts.Notifications.Notifications.Repositories
{
	using Diplom.Domain.Contexts.Notifications.Notifications.Models;
	using Diplom.Domain.Contexts.Notifications.Notifications.Services;
	using Microsoft.EntityFrameworkCore;
	using System.Collections.Generic;
	using System.Linq;
	using System.Threading.Tasks;

	public class SiteNotificationRepository : INotificationRepository<SiteNotification>
	{
		private readonly ApplicationContext _appContext;

		public SiteNotificationRepository(ApplicationContext appContext)
		{
			_appContext = appContext;
		}

		public IQueryable<SiteNotification> GetNotificationsTracking()
		{
			return _appContext.SiteNotifications;
		}

		public async Task<List<SiteNotification>> GetNotificationsByRecieverId(int id)
		{
			return await _appContext.SiteNotifications
				.Where(n => n.RecieverId == id)
				.ToListAsync();
		}

		public async Task SaveNotifications(List<SiteNotification> notifications)
		{
			await _appContext.SiteNotifications.AddRangeAsync(notifications);
		}
	}
}
