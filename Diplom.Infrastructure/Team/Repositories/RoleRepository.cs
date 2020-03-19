namespace Diplom.Infrastructure.Team.Repositories
{
    using Diplom.Domain.Team.Models;
    using Diplom.Domain.Team.Services;
    using Diplom.Infrastructure;
	using Microsoft.EntityFrameworkCore;
	using System.Threading.Tasks;

	public class RoleRepository : IRoleRepository
	{
		private readonly ApplicationContext _dbContext;

		public RoleRepository(ApplicationContext dbContext)
		{
			_dbContext = dbContext;
		}

		public async Task<Role> FindRoleByName(string name)
		{
			return null;
			//return await _dbContext.Roles.FirstOrDefaultAsync(r => r.Name == name);
		}
	}
}
