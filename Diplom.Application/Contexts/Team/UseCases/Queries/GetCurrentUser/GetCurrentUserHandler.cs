namespace Diplom.Application.Contexts.Team.UseCases.Queries.GetCurrentUser
{
	using Diplom.Application.Contexts.Core.Mediator;
	using Diplom.Domain.Contexts.Team.Models;
	using Microsoft.AspNetCore.Http;
	using Microsoft.AspNetCore.Identity;
	using System.Threading;
	using System.Threading.Tasks;

	public class GetCurrentUserHandler : IQueryHandler<GetCurrentUser, GetCurrentUserResult>
	{
		private readonly IHttpContextAccessor _httpContextAccessor;

		private readonly UserManager<User> _userManager;

		public GetCurrentUserHandler(
			IHttpContextAccessor httpContextAccessor,
			UserManager<User> userManager)
		{
			_httpContextAccessor = httpContextAccessor;
			_userManager = userManager;
		}

		public async Task<GetCurrentUserResult> Handle(GetCurrentUser request, CancellationToken cancellationToken)
		{
			var identityName = _httpContextAccessor.HttpContext.User.Identity.Name;
			var user = await _userManager.FindByEmailAsync(identityName);

			return new GetCurrentUserResult(user);
		}
	}
}
