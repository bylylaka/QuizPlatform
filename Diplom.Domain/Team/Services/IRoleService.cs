namespace Diplom.Domain.Team.Services
{
	using Diplom.Domain.Team.Models;
	using System.Threading.Tasks;

	public interface IRoleService
	{
		Task<Role> GetRoleByName(string name);
	}
}
