namespace Diplom.Application.Contexts.Notifications.Notifications.SiteNotifications.UseCases.Commands.UpdateNotificationsOpenedStatus
{
	using Diplom.Application.Contexts.Core.Mediator;
	using Diplom.Domain.Contexts.Core.Repositories;
	using MediatR;
	using Microsoft.EntityFrameworkCore;
	using System.Linq;
	using System.Threading;
	using System.Threading.Tasks;

	public class UpdateNotificationsOpenedStatusHandler : ICommandHandler<UpdateNotificationsOpenedStatus>
	{
		private readonly IUnitOfWork _unitOfWork;

		public UpdateNotificationsOpenedStatusHandler(
			IUnitOfWork unitOfWork)
		{
			_unitOfWork = unitOfWork;
		}

		public async Task<Unit> Handle(UpdateNotificationsOpenedStatus request, CancellationToken cancellationToken)
		{
			var notificatoin = await _unitOfWork
				.SiteNotifications
				.GetNotificationsTracking()
				.Where(n => request.NotificationsIds.Contains(n.Id))
				.ToListAsync();

			notificatoin.ForEach(n => n.WasOpened = true);

			await _unitOfWork.SaveAsync();

			return Unit.Value;
		}
	}
}
