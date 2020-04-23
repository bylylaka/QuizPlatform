namespace Diplom.Application.Contexts.Quiz.UseCases.Queries.GetQuiz
{
    using Diplom.Application.Contexts.Core.Mediator;
    using Diplom.Application.Contexts.Quiz.Models;

    public class GetQuiz : IQuery<QuizViewModel>
    {
        public GetQuiz(int id)
        {
            Id = id;
        }

        public int Id { get; set; }
    }
}
