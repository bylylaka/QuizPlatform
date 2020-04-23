namespace Diplom.Domain.Contexts.Team.Services
{
    using Diplom.Domain.Contexts.Team.Models;
    using System.Collections.Generic;
    using System.Threading.Tasks;

	public interface IUserService
	{
		Task<User> FindUserById(int id);

		Task<List<User>> GetUsersBySearchWord(string word);

		Task<User> GetUserByEmailAndPasswordAsync(string email, string password);
	}
}
