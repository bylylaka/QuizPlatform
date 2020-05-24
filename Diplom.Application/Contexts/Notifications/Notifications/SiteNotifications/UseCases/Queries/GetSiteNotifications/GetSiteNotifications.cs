namespace Diplom.Application.Contexts.Notifications.Notifications.SiteNotifications.UseCases.Queries.GetSiteNotifications
{
	using Diplom.Application.Contexts.Core.Mediator;

	public class GetSiteNotifications : IQuery<GetSiteNotificationsResult>
	{
		public GetSiteNotifications(int recieverId)
		{
			RecieverId = recieverId;
		}

		public int RecieverId { get; set; }
	}
}
