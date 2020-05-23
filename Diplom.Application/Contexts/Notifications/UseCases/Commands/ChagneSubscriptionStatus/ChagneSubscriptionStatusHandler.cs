namespace Diplom.Application.Contexts.Notifications.UseCases.Commands.ChagneSubscriptionStatus
{
	using Diplom.Application.Contexts.Core.Mediator;
	using Diplom.Domain.Contexts.Core.Exceptions;
	using Diplom.Domain.Contexts.Core.Repositories;
	using Diplom.Domain.Contexts.Notifications.Models;
	using MediatR;
	using System.Threading;
	using System.Threading.Tasks;

	public class ChagneSubscriptionStatusHandler : ICommandHandler<ChagneSubscriptionStatus>
	{
		private readonly IUnitOfWork _unitOfWork;

		public ChagneSubscriptionStatusHandler(IUnitOfWork unitOfWork)
		{
			_unitOfWork = unitOfWork;
		}

		public async Task<Unit> Handle(ChagneSubscriptionStatus request, CancellationToken cancellationToken)
		{
			var subscription = await _unitOfWork.Notifications.GetSubscription(request.ProducerId, request.ConsumerId);

			if (request.Subscribe)
			{
				if (subscription != null)
				{
					throw new BadRequestException();
				}

				var newSubscription = new Subscription()
				{
					ConsumerId = request.ConsumerId,
					ProducerId = request.ProducerId,
				};

				await _unitOfWork.Notifications.AddSubsctiption(newSubscription);
			}
			else
			{
				if (subscription == null)
				{
					throw new BadRequestException();
				}

				await _unitOfWork.Notifications.RemoveSubsctiption(subscription);
			}
			await _unitOfWork.SaveAsync();

			return Unit.Value;
		}
	}
}
