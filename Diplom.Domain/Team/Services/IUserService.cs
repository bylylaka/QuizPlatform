namespace Diplom.Domain.Team.Services
{
	using Diplom.Domain.Team.Models;
    using System.Collections.Generic;
    using System.Threading.Tasks;

	public interface IUserService
	{
		Task<User> FindUserById(int id);

		Task<List<User>> GetUsersBySearchWord(string word);

		Task<User> GetUserByEmailAndPasswordAsync(string email, string password);
	}
}
