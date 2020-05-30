namespace Diplom.Application.Contexts.Notifications.Notifications.SiteNotifications.UseCases.Commands.UpdateNotificationsOpenedStatus
{
	using Diplom.Application.Contexts.Core.Mediator;
	using System.Collections.Generic;

	public class UpdateNotificationsOpenedStatus : ICommand
	{
		public List<int> NotificationsIds { get; set; }
	}
}
