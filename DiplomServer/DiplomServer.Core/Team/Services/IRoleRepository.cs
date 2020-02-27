namespace DiplomServer.Domain.Team.Services
{
    using DiplomServer.Domain.Team.Models;
	using System.Threading.Tasks;

	public interface IRoleRepository
	{
		public Task<Role> FindRoleByName(string name);
	}
}
