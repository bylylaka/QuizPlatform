namespace Diplom.Domain.Team.Services
{
	using Diplom.Domain.Team.Models;
	using System.Threading.Tasks;

	public class UserService : IUserService
	{
		private readonly IUserRepository _userRepository;

		public UserService(IUserRepository userRepository)
		{
			_userRepository = userRepository;
		}

		public async Task<User> GetUserByEmailAndPasswordAsync(string email, string password)
		{
			return await _userRepository.FindUserByEmailAndPasswordAsync(email, password);
		}

		public async Task<User> GetUserByEmailAsync(string email)
		{
			return await _userRepository.FindUserByEmailAsync(email);
		}
	}
}
