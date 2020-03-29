namespace Diplom.Infrastructure.Team.Repositories
{
    using Diplom.Domain.Team.Models;
    using Diplom.Domain.Team.Services;
	using Microsoft.EntityFrameworkCore;
	using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;

	public class UserRepository : IUserRepository
	{
		private readonly ApplicationContext _dbContext;

		public UserRepository(ApplicationContext dbContext)
		{
			_dbContext = dbContext;
		}

		public async Task<User> FindUserByEmailAndPasswordAsync(string email, string password)
		{
			return null;
			//return await _dbContext.Users.FirstOrDefaultAsync(x => x.Email == email && x.Password == password);
		}

		public async Task<User> FindUserByEmailAsync(string email)
		{
			return null;
			//return await _dbContext.Users.FirstOrDefaultAsync(x => x.Email == email);
		}

		public IQueryable<User> FindUsersTrackable()
		{
			return _dbContext.Users.AsQueryable();
		}
	}
}
