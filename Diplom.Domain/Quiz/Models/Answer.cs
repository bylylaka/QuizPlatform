namespace Diplom.Domain.Quiz.Models
{
	public class Answer
	{
		public int Id { get; set; }

		public int QuizId { get; set; }

		public int QuestionId { get; set; }

		public object Value { get; set; }

		public int UserId { get; set; }
	}
}
