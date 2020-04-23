namespace Diplom.Application.Contexts.Quiz.UseCases.Queries.SearchByWord
{
    using AutoMapper;
    using Diplom.Application.Contexts.Core.Mediator;
    using Diplom.Domain.Contexts.Core.Repositories;
    using Microsoft.EntityFrameworkCore;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading;
    using System.Threading.Tasks;

    public class SearchByWordHandler : IQueryHandler<SearchByWord, List<SearchByWordResult>>
    {
        private readonly IMapper _mapper;

        public SearchByWordHandler(IMapper mapper, IUnitOfWork unitOfWork)
        {
            _mapper = mapper;
            _unitOfWork = unitOfWork;
        }

        private readonly IUnitOfWork _unitOfWork;

        public async Task<List<SearchByWordResult>> Handle(SearchByWord request, CancellationToken cancellationToken)
        {
            var quizesAsQuery = _unitOfWork.Quizes.FindQuizesTrackable();

            var quizes = await quizesAsQuery
                .Where(q => q.Title.ToLower().Contains(request.Word.ToLower()))
                .ToListAsync();

            var quizesModels = quizes
                .Select(quiz => _mapper.Map<SearchByWordResult>(quiz))
                .ToList();

            return quizesModels;
        }
    }
}
