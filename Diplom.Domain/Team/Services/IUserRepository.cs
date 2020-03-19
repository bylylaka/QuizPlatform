namespace Diplom.Domain.Team.Services
{
	using Diplom.Domain.Team.Models;
	using System.Threading.Tasks;

	public interface IUserRepository
	{
		public Task<User> FindUserByEmailAndPasswordAsync(string email, string password);

		public Task<User> FindUserByEmailAsync(string email);
	}
}
