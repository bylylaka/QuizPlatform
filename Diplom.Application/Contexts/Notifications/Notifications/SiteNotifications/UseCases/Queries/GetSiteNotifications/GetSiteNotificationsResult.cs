namespace Diplom.Application.Contexts.Notifications.Notifications.SiteNotifications.UseCases.Queries.GetSiteNotifications
{
	using Diplom.Domain.Contexts.Notifications.Notifications.Models;
	using System.Collections.Generic;

	public class GetSiteNotificationsResult
	{
		public List<SiteNotification> Notifications { get; set; }
	}
}
