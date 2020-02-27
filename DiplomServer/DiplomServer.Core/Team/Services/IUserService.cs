namespace DiplomServer.Domain.Team.Services
{
    using DiplomServer.Domain.Team.Models;
	using System.Threading.Tasks;

	public interface IUserService
	{
		Task<User> GetUserByEmailAndPasswordAsync(string email, string password);

		Task<User> GetUserByEmailAsync(string email);
	}
}
