namespace Diplom.Application.Contexts.Notifications.Subscriptions.UseCases.Queries.GetSubscriptionStatus
{
	using Diplom.Application.Contexts.Core.Mediator;
	using Diplom.Domain.Contexts.Core.Repositories;
	using System.Threading;
	using System.Threading.Tasks;

	public class GetSubscriptionStatusHandler : IQueryHandler<GetSubscriptionStatus, GetSubscriptionStatusResult>
	{
		private readonly IUnitOfWork _unitOfWork;

		public GetSubscriptionStatusHandler(IUnitOfWork unitOfWork)
		{
			_unitOfWork = unitOfWork;
		}

		public async Task<GetSubscriptionStatusResult> Handle(GetSubscriptionStatus request, CancellationToken cancellationToken)
		{
			var subsciption = await _unitOfWork.Subscriptions.GetSubscription(request.ProducerId, request.ConsumerId);

			return new GetSubscriptionStatusResult()
			{
				Subscribe = subsciption != null
			};
		}
	}
}
