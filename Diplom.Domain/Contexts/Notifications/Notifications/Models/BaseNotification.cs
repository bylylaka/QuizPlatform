using Diplom.Domain.Contexts.Team.Models;
using System;

namespace Diplom.Domain.Contexts.Notifications.Notifications.Models
{
	public abstract class BaseNotification
	{
		public int Id { get; set; }

		public int ProducerId { get; set; }

		public string ProducerName { get; set; }

		public int RecieverId { get; set; }

		public int QuizId { get; set; }

		public string QuizTitle { get; set; }

		public DateTime DateCreated { get; set; }

		public User Producer { get; set; }
	}
}
