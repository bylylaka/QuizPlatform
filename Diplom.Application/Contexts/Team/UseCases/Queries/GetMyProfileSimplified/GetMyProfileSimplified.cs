namespace Diplom.Application.Contexts.Team.UseCases.Queries.GetMyProfileSimplified
{
    using Diplom.Application.Contexts.Core.Mediator;
    using System.Security.Claims;

    public class GetMyProfileSimplified : IQuery<GetMyProfileSimplifiedResult>
    {
        public GetMyProfileSimplified(ClaimsPrincipal principal)
        {
            Principal = principal;
        }

        public ClaimsPrincipal Principal { get; set; }
    }
}
