namespace Diplom.Application.Contexts.Team.UseCases.Queries.GetMyProfileSimplified
{
    using Diplom.Application.Contexts.Core.Mediator;
    using Diplom.Domain.Contexts.Team.Models;
    using Microsoft.AspNetCore.Identity;
    using System.Threading;
    using System.Threading.Tasks;

    public class GetMyProfileSimplifiedHandler : IQueryHandler<GetMyProfileSimplified, GetMyProfileSimplifiedResult>
    {
        private readonly UserManager<User> _userManager;

        public GetMyProfileSimplifiedHandler(
            UserManager<User> userManager)
        {
            _userManager = userManager;
        }

        public async Task<GetMyProfileSimplifiedResult> Handle(GetMyProfileSimplified request, CancellationToken cancellationToken)
        {
            var currentProfile = await _userManager.GetUserAsync(request.Principal);
            var result = new GetMyProfileSimplifiedResult(currentProfile.Id);

            return result;
        }
    }
}
