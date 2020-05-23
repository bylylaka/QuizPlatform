using Diplom.Domain.Contexts.Team.Models;

namespace Diplom.Domain.Contexts.Notifications.Models
{
	public class SiteNotification
	{
		public int Id { get; set; }

		public int ProducerId { get; set; }

		public int ProducerName { get; set; }

		public int RecieverId { get; set; }

		public int QuizId { get; set; }

		public string QuizTitle { get; set; }

		public User Producer { get; set; }
	}
}
