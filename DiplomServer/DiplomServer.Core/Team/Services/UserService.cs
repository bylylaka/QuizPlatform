namespace DiplomServer.Domain.Team.Services
{
	using DiplomServer.Infrastructure;
	using DiplomServer.Infrastructure.Models;
	using Microsoft.EntityFrameworkCore;
	using System.Threading.Tasks;

	public class UserService : IUserService
	{
		private readonly ApplicationContext db;

		public UserService(ApplicationContext context)
		{
			db = context;
		}

		public async Task<User> FindUserByEmailAndPasswordAsync(string email, string password)
		{
			var user = await db.Users.FirstOrDefaultAsync(u => u.Email == email && u.Password == password);
			return user;
		}
	}
}
