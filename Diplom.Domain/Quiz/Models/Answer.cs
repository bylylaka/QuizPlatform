namespace Diplom.Domain.Quiz.Models
{
	using Newtonsoft.Json.Linq;

	public class Answer
	{
		public int Id { get; set; }

		public int QuizId { get; set; }

		public int QuestionId { get; set; }

		public object Value { get; set; }
	}
}
