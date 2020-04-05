namespace Diplom.WebApi.Models.Quiz
{
	using Diplom.WebApi.Models.User;

	public class QuizSearchViewModel
	{
		public int QuizId { get; set; }

		public string Title { get; set; }

		public UserSimplifiedViewModel User { get; set; }
	}
}
