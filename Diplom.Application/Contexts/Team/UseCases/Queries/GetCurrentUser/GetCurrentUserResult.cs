namespace Diplom.Application.Contexts.Team.UseCases.Queries.GetCurrentUser
{
	using Diplom.Domain.Contexts.Team.Models;

	public class GetCurrentUserResult
	{
		public GetCurrentUserResult(User user)
		{
			User = user;
		}

		public User User { get; set; }
	}
}
