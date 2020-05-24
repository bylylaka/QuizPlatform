namespace Diplom.Application.Contexts.Notifications.Notifications.SiteNotifications.UseCases.Queries.GetSiteNotifications
{
	using Diplom.Application.Contexts.Core.Mediator;
	using Diplom.Domain.Contexts.Core.Repositories;
	using System.Threading;
	using System.Threading.Tasks;

	public class GetSiteNotificationsHandler : IQueryHandler<GetSiteNotifications, GetSiteNotificationsResult>
	{
		private readonly IUnitOfWork _unitOfWork;

		public GetSiteNotificationsHandler(IUnitOfWork unitOfWork)
		{
			_unitOfWork = unitOfWork;
		}

		public async Task<GetSiteNotificationsResult> Handle(GetSiteNotifications request, CancellationToken cancellationToken)
		{
			var notifications = await _unitOfWork.SiteNotifications.GetNotificationsByRecieverId(request.RecieverId);

			var result = new GetSiteNotificationsResult()
			{
				Notifications = notifications
			};

			return result;
		}
	}
}
