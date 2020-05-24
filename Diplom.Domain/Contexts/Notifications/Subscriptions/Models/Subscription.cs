namespace Diplom.Domain.Contexts.Notifications.Subscriptions.Models
{
	using Diplom.Domain.Contexts.Team.Models;

	public class Subscription
	{
		public int Id { get; set; }

		public int ConsumerId { get; set; }

		public int ProducerId { get; set; }

		public User Consumer { get; set; }

		public User Producer { get; set; }
	}
}
