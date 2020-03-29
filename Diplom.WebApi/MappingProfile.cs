namespace Diplom.WebApi
{
	using AutoMapper;
	using Diplom.Domain.Team.Models;
	using Diplom.WebApi.Models.Profile;
	using Diplom.WebApi.Models.User;

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

			CreateMap<User, ProfileSimplifiedViewModel>()
				.ReverseMap();

			CreateMap<User, UserSimplifiedViewModel>()
				.ForMember(um => um.Name,
				opt => opt.MapFrom(u => u.UserName));
		}
	}
}
