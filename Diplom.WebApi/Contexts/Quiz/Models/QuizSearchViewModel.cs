using Diplom.WebApi.Contexts.Team.Models.Profile;

namespace Diplom.WebApi.Contexts.Quiz.Models
{
	public class QuizSearchViewModel
	{
		public int QuizId { get; set; }

		public string Title { get; set; }

		public UserSimplifiedViewModel User { get; set; }
	}
}
