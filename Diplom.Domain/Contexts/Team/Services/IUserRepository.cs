namespace Diplom.Domain.Contexts.Team.Services
{
    using Diplom.Domain.Contexts.Team.Models;
    using System.Linq;
    using System.Threading.Tasks;

	public interface IUserRepository
	{
		public Task<User> FindUserByEmailAndPasswordAsync(string email, string password);

		public IQueryable<User> FindUsersTrackable();
	}
}
