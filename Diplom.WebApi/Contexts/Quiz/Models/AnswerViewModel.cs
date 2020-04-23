namespace Diplom.WebApi.Contexts.Quiz.Models
{
	public class AnswerViewModel
	{
		public int Id { get; set; }

		public int QuizId { get; set; }

		public int QuestionId { get; set; }

		public string Value { get; set; }
	}
}
