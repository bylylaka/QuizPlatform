namespace Diplom.Application.Contexts.Team.UseCases.Queries.SearchByWord
{
    using AutoMapper;
    using Diplom.Application.Contexts.Core.Mediator;
    using Diplom.Application.Contexts.Team.Models;
    using Diplom.Domain.Contexts.Team.Services;
    using System.Linq;
    using System.Threading;
    using System.Threading.Tasks;

    public class SearchByWordHandler : IQueryHandler<SearchByWord, SearchByWordResult>
    {
        private readonly IMapper _mapper;

        private readonly IUserService _userService;

        public SearchByWordHandler(
            IMapper mapper,
            IUserService userService)
        {
            _mapper = mapper;
            _userService = userService;
        }

        public async Task<SearchByWordResult> Handle(SearchByWord request, CancellationToken cancellationToken)
        {
            var users = await _userService.GetUsersBySearchWord(request.Word);

            var usersSimplified = users
                .Select(u => _mapper.Map<UserSimplifiedViewModel>(u))
                .ToList();

            var result = new SearchByWordResult(usersSimplified);

            return result;
        }
    }
}
