namespace Diplom.WebApi
{
	using AutoMapper;
	using Diplom.Domain.Team.Models;
	using Diplom.WebApi.Models;

	public class MappingProfile : Profile
	{
		public MappingProfile()
		{
			MapForUsers();
		}

		public void MapForUsers()
		{
			CreateMap<User, UserOutputViewModel>()
				.ForMember(um => um.Name,
				opt => opt.MapFrom(u => u.UserName));
		}
	}
}
