namespace Diplom.Application.Contexts.Quiz.UseCases.Queries.GetUserQuizList
{
    using Diplom.Application.Contexts.Core.Mediator;
    using Diplom.Application.Contexts.Quiz.Models;
    using System.Collections.Generic;

    public class GetUserQuizList : IQuery<List<QuizViewModel>>
    {
        public GetUserQuizList(int id)
        {
            Id = id;
        }

        public int Id { get; set; }
    }
}
