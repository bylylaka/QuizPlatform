namespace Diplom.Application.Contexts.Team.UseCases.Queries.SearchByWord
{
    using AutoMapper;
    using Diplom.Application.Contexts.Core.Mediator;
    using Diplom.Application.Contexts.Team.Models;
    using Diplom.Domain.Contexts.Core.Repositories;
    using Diplom.Domain.Contexts.Team.Services;
    using Microsoft.EntityFrameworkCore;
    using System.Linq;
    using System.Threading;
    using System.Threading.Tasks;

    public class SearchByWordHandler : IQueryHandler<SearchByWord, SearchByWordResult>
    {
        private readonly IMapper _mapper;

        public SearchByWordHandler(IMapper mapper, IUnitOfWork unitOfWork)
        {
            _mapper = mapper;
            _unitOfWork = unitOfWork;
        }

        private readonly IUnitOfWork _unitOfWork;

        public async Task<SearchByWordResult> Handle(SearchByWord request, CancellationToken cancellationToken)
        {
            var usersAsQuery = _unitOfWork.Users.FindUsersTrackable();
            var users = await usersAsQuery
                .Where(u => u.Email.Contains(request.Word) ||
                u.UserName.Contains(request.Word))
                .ToListAsync();

            var usersSimplified = users
                .Select(u => _mapper.Map<UserSimplifiedViewModel>(u))
                .ToList();

            var result = new SearchByWordResult(usersSimplified);

            return result;
        }
    }
}
