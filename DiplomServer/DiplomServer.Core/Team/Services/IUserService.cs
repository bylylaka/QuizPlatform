namespace DiplomServer.Domain.Team.Services
{
	using DiplomServer.Infrastructure.Models;
	using System.Threading.Tasks;

	public interface IUserService
	{
		Task<User> FindUserByEmailAndPasswordAsync(string email, string password);
	}
}
