using DiplomServer.Domain.Team.Models;
using System.Threading.Tasks;

namespace DiplomServer.Domain.Team.Services
{
	public interface IUserRepository
	{
		public Task<User> FindUserByEmailAndPasswordAsync(string email, string password);

		public Task<User> FindUserByEmailAsync(string email);
	}
}
