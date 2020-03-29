namespace Diplom.Domain.Team.Services
{
	using Diplom.Domain.Team.Models;
    using System.Threading.Tasks;

	public interface IRoleRepository
	{
		public Task<Role> FindRoleByName(string name);
	}
}
