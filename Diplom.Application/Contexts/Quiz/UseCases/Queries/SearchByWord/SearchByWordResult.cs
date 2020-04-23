namespace Diplom.Application.Contexts.Quiz.UseCases.Queries.SearchByWord
{
    using Diplom.Application.Contexts.Team.Models;

    public class SearchByWordResult
    {
        public int QuizId { get; set; }

        public string Title { get; set; }

        public UserSimplifiedViewModel User { get; set; }
    }
}
