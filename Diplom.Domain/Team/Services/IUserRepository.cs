namespace Diplom.Domain.Team.Services
{
	using Diplom.Domain.Team.Models;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;

	public interface IUserRepository
	{
		public Task<User> FindUserByEmailAndPasswordAsync(string email, string password);

		public IQueryable<User> FindUsersTrackable();
	}
}
