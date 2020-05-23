namespace Diplom.Application.Contexts.Notifications.UseCases.Commands.ChagneSubscriptionStatus
{
	using Diplom.Application.Contexts.Core.Mediator;

	public class ChagneSubscriptionStatus : ICommand
	{
		public int ConsumerId { get; set; }

		public int ProducerId { get; set; }

		public bool Subscribe { get; set; }
	}
}
