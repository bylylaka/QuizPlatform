namespace Diplom.Domain.Quiz.Models
{
	using System.Collections.Generic;

	public class Quiz
	{
		public int Id { get; set; }

		public List<Question> Questions { get; set; }
	}
}
