namespace Diplom.Application.Contexts.Quiz.UseCases.Queries.SearchByWord
{
    using AutoMapper;
    using Diplom.Application.Contexts.Core.Mediator;
    using Diplom.Domain.Contexts.Quiz.Services;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading;
    using System.Threading.Tasks;

    public class SearchByWordHandler : IQueryHandler<SearchByWord, List<SearchByWordResult>>
    {
        private readonly IMapper _mapper;

        private readonly IQuizService _quizService;

        public SearchByWordHandler(
            IMapper mapper,
            IQuizService quizService)
        {
            _mapper = mapper;
            _quizService = quizService;
        }

        public async Task<List<SearchByWordResult>> Handle(SearchByWord request, CancellationToken cancellationToken)
        {
            var quizes = await _quizService.GetQuizesBySearchWord(request.Word);

            var quizesModels = quizes
                .Select(quiz => _mapper.Map<SearchByWordResult>(quiz))
                .ToList();

            return quizesModels;
        }
    }
}
