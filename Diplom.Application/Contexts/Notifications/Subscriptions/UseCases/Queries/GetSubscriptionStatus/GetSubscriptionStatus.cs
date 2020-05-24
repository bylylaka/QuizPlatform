namespace Diplom.Application.Contexts.Notifications.Subscriptions.UseCases.Queries.GetSubscriptionStatus
{
	using Diplom.Application.Contexts.Core.Mediator;

	public class GetSubscriptionStatus : IQuery<GetSubscriptionStatusResult>
	{
		public GetSubscriptionStatus(int consumerId, int producerId)
		{
			ConsumerId = consumerId;
			ProducerId = producerId;
		}

		public int ConsumerId { get; set; }

		public int ProducerId { get; }
	}
}
