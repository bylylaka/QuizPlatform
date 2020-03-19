namespace Diplom.Domain.Team.Services
{
	using Diplom.Domain.Team.Models;
	using System.Threading.Tasks;

	public class RoleService : IRoleService
	{
		private readonly IRoleRepository _roleRepository;

		public RoleService(IRoleRepository roleRepository)
		{
			_roleRepository = roleRepository;
		}

		public async Task<Role> GetRoleByName(string name)
		{
			return await _roleRepository.FindRoleByName(name);
		}
	}
}
