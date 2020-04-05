namespace Diplom.Domain.Quiz.Models
{
	using System.Collections.Generic;

	public class QuizViewModel
	{
		public int Id { get; set; }

		public string Title { get; set; }

		public List<QuestionViewModel> Questions { get; set; }
	}
}
