namespace DiplomServer.Domain.Team.Services
{
    using DiplomServer.Domain.Team.Models;
	using System.Threading.Tasks;

	public interface IRoleService
	{
		Task<Role> GetRoleByName(string name);
	}
}
