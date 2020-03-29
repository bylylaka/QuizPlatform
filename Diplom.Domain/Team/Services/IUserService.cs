namespace Diplom.Domain.Team.Services
{
	using Diplom.Domain.Team.Models;
	using System.Threading.Tasks;

	public interface IUserService
	{
		Task<User> FindUserById(int id);

		Task<User> GetUserByEmailAndPasswordAsync(string email, string password);

		Task<User> GetUserByEmailAsync(string email);
	}
}
