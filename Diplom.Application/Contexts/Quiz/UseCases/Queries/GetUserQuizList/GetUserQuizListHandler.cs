namespace Diplom.Application.Contexts.Quiz.UseCases.Queries.GetUserQuizList
{
    using AutoMapper;
    using Diplom.Application.Contexts.Core.Mediator;
    using Diplom.Application.Contexts.Quiz.Models;
    using Diplom.Domain.Contexts.Quiz.Services;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading;
    using System.Threading.Tasks;

    public class GetUserQuizListHandler : IQueryHandler<GetUserQuizList, List<QuizViewModel>>
    {
        private readonly IMapper _mapper;

        private readonly IQuizService _quizService;

        public GetUserQuizListHandler(
            IMapper mapper,
            IQuizService quizService)
        {
            _mapper = mapper;
            _quizService = quizService;
        }

        public async Task<List<QuizViewModel>> Handle(GetUserQuizList request, CancellationToken cancellationToken)
        {
            var quizList = await _quizService.GetUserQuizList(request.Id);

            var result = quizList
                .Select(q => _mapper.Map<QuizViewModel>(q))
                .ToList();

            return result;
        }
    }
}
