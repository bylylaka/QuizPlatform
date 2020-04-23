namespace Diplom.WebApi.Contexts.Quiz.Models
{
    using Diplom.Application.Contexts.Team.Models;

    public class QuizSearchViewModel
    {
        public int QuizId { get; set; }

        public string Title { get; set; }

        public UserSimplifiedViewModel User { get; set; }
    }
}
