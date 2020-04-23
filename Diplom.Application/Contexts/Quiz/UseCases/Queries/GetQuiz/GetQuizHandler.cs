namespace Diplom.Application.Contexts.Quiz.UseCases.Queries.GetQuiz
{
    using AutoMapper;
    using Diplom.Application.Contexts.Core.Mediator;
    using Diplom.Application.Contexts.Quiz.Models;
    using Diplom.Domain.Contexts.Quiz.Services;
    using System.Threading;
    using System.Threading.Tasks;

    public class GetQuizHandler : IQueryHandler<GetQuiz, QuizViewModel>
    {
        private readonly IMapper _mapper;

        private readonly IQuizService _quizService;

        public GetQuizHandler(
            IMapper mapper,
            IQuizService quizService)
        {
            _mapper = mapper;
            _quizService = quizService;
        }

        public async Task<QuizViewModel> Handle(GetQuiz request, CancellationToken cancellationToken)
        {
            var quiz = await _quizService.GetQuizById(request.Id);
            var result = _mapper.Map<QuizViewModel>(quiz);

            return result;
        }
    }
}
