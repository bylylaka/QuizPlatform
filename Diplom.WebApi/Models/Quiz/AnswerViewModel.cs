namespace Diplom.WebApi.Models.Quiz
{
    using Newtonsoft.Json.Linq;
    using System.Text.Json;

	public class AnswerViewModel
	{
		public int Id { get; set; }

		public int QuizId { get; set; }

		public int QuestionId { get; set; }

		public string Value { get; set; }
	}
}
