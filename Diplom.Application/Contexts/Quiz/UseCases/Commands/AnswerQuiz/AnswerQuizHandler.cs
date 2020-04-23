namespace Diplom.Application.Contexts.Quiz.UseCases.Commands.AnswerQuiz
{
    using AutoMapper;
    using Diplom.Application.Contexts.Core.Mediator;
    using Diplom.Domain.Contexts.Quiz.Models;
    using Diplom.Domain.Contexts.Quiz.Services;
    using Diplom.Domain.Contexts.Team.Models;
    using MediatR;
    using Microsoft.AspNetCore.Identity;
    using System.Linq;
    using System.Threading;
    using System.Threading.Tasks;

    public class AnswerQuizHandler : ICommandHandler<AnswerQuiz>
    {
        private readonly IMapper _mapper;

        private readonly UserManager<User> _userManager;

        private readonly IQuizService _quizService;

        public AnswerQuizHandler(
            IMapper mapper,
            UserManager<User> userManager,
            IQuizService quizService)
        {
            _mapper = mapper;
            _userManager = userManager;
            _quizService = quizService;
        }

        public async Task<Unit> Handle(AnswerQuiz request, CancellationToken cancellationToken)
        {
            var user = await _userManager.GetUserAsync(request.Principal);
            var answers = request.Answers
                .Select(am => _mapper.Map<Answer>(am))
                .ToList();
            answers.ForEach(a => a.UserId = user.Id);

            await _quizService.AddAnswers(answers);

            return Unit.Value;
        }
    }
}
