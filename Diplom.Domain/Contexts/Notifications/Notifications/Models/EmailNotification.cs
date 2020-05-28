namespace Diplom.Domain.Contexts.Notifications.Notifications.Models
{
	using Diplom.Domain.Contexts.Team.Models;

	public class EmailNotification : BaseNotification
	{
		public User Reciever { get; set; }

		public string QuizCreatorPath { get; set; }

		public string QuizPath { get; set; }
	}
}
