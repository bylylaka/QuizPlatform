namespace Diplom.Domain.Quiz.Models
{
    using Diplom.Domain.Team.Models;
    using System.Collections.Generic;

	public class Quiz
	{
		public int Id { get; set; }

		public string Title { get; set; }

		public int UserId { get; set; }

		public User User { get; set; }

		public List<Question> Questions { get; set; }

	}
}
