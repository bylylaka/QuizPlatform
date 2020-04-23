namespace Diplom.Domain.Contexts.Team.Services
{
    using Diplom.Domain.Contexts.Core.Repositories;
    using Diplom.Domain.Contexts.Team.Models;
	using Microsoft.AspNetCore.Identity;
    using Microsoft.EntityFrameworkCore;
	using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;

	public class UserService : IUserService
	{
		private readonly IUnitOfWork _unitOfWork;

		private readonly UserManager<User> _userManager;

		public UserService(IUnitOfWork unitOfWork,
			UserManager<User> userManager)
		{
			_unitOfWork = unitOfWork;
			_userManager = userManager;
		}

		public async Task<User> FindUserById(int id)
		{
			return await _userManager.Users.FirstOrDefaultAsync(u => u.Id == id);
		}

		public Task<List<User>> GetUsersBySearchWord(string word)
		{
			var usersAsQuery = _unitOfWork.Users.FindUsersTrackable();
			var filteredUsers = usersAsQuery
				.Where(u => u.Email.Contains(word) ||
				u.UserName.Contains(word))
				.ToListAsync();

			return filteredUsers;
		}

		public async Task<User> GetUserByEmailAndPasswordAsync(string email, string password)
		{
			return await _unitOfWork.Users.FindUserByEmailAndPasswordAsync(email, password);
		}
	}
}
