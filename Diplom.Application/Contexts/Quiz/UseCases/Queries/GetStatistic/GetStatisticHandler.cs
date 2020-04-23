namespace Diplom.Application.Contexts.Quiz.UseCases.Queries.GetStatistic
{
    using AutoMapper;
    using Diplom.Application.Contexts.Core.Mediator;
    using Diplom.Application.Contexts.Quiz.Models;
    using Diplom.Domain.Contexts.Quiz.Services;
    using System.Linq;
    using System.Threading;
    using System.Threading.Tasks;

    public class GetStatisticHandler : IQueryHandler<GetStatistic, StatisticQuizViewModel>
    {
        private readonly IMapper _mapper;

        private readonly IQuizService _quizService;

        public GetStatisticHandler(
            IMapper mapper,
            IQuizService quizService)
        {
            _mapper = mapper;
            _quizService = quizService;
        }

        public async Task<StatisticQuizViewModel> Handle(GetStatistic request, CancellationToken cancellationToken)
        {
            var quiz = await _quizService.GetQuizById(request.Id);
            var quizAnswers = await _quizService.GetQuizAnswers(request.Id);
            var quizOptions = await _quizService.GetQuizOptions(request.Id);

            var quizStatistic = new StatisticQuizViewModel()
            {
                Title = quiz.Title,
                Questions = quiz.Questions.Select(q =>
                {
                    var questionAnswers = quizAnswers.Where(a => a.QuestionId == q.Id);

                    return new StatisticQuestionViewModel()
                    {
                        Title = q.Title,
                        Type = q.Type,
                        Answers = questionAnswers.Select(a => _mapper.Map<StatisticAnswerViewModel>(a))
                        .ToList(),
                        Options = quizOptions.Select(o => _mapper.Map<OptionViewModel>(o))
                        .ToList()
                    };
                })
                .ToList()
            };

            return quizStatistic;
        }
    }
}
