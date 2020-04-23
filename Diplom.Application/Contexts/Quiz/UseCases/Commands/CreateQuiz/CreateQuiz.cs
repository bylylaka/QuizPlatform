namespace Diplom.Application.Contexts.Quiz.UseCases.Commands.CreateQuiz
{
    using Diplom.Application.Contexts.Core.Mediator;
    using Diplom.Application.Contexts.Quiz.Models;
    using System.Collections.Generic;
    using System.Security.Claims;

    public class CreateQuiz : ICommand
    {
        public ClaimsPrincipal Principal { get; set; }

        public int Id { get; set; }

        public string Title { get; set; }

        public List<QuestionViewModel> Questions { get; set; }
    }
}
