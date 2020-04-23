namespace Diplom.Application.Contexts.Quiz.UseCases.Commands.AnswerQuiz
{
    using Diplom.Application.Contexts.Core.Mediator;
    using Diplom.Application.Contexts.Quiz.Models;
    using System.Collections.Generic;
    using System.Security.Claims;

    public class AnswerQuiz : ICommand
    {
        public AnswerQuiz(ClaimsPrincipal principal, List<AnswerViewModel> answers)
        {
            Principal = principal;
            Answers = answers;
        }

        public ClaimsPrincipal Principal { get; set; }

        public List<AnswerViewModel> Answers { get; set; }
    }
}
