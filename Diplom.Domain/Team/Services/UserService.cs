namespace Diplom.Domain.Team.Services
{
	using Diplom.Domain.Team.Models;
	using Microsoft.AspNetCore.Identity;
    using Microsoft.EntityFrameworkCore;
    using System.Threading.Tasks;

	public class UserService : IUserService
	{
		private readonly IUserRepository _userRepository;

		private readonly UserManager<User> _userManager;

		public UserService(IUserRepository userRepository,
			UserManager<User> userManager)
		{
			_userRepository = userRepository;
			_userManager = userManager;
		}

		public async Task<User> FindUserById(int id)
		{
			return await _userManager.Users.FirstOrDefaultAsync(u => u.Id == id);
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
