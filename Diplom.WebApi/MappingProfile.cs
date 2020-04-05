namespace Diplom.WebApi
{
	using AutoMapper;
	using Diplom.Domain.Quiz.Models;
	using Diplom.Domain.Team.Models;
	using Diplom.WebApi.Models.Profile;
	using Diplom.WebApi.Models.Quiz;
	using Diplom.WebApi.Models.User;
    using Newtonsoft.Json;
    using Newtonsoft.Json.Linq;

    public class MappingProfile : Profile
	{
		public MappingProfile()
		{
			MapForUsers();
			MapForQuiz();
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

		public void MapForQuiz()
		{
			CreateMap<Quiz, QuizViewModel>()
				.ReverseMap();

			CreateMap<Quiz, QuizSearchViewModel>();

			CreateMap<Option, OptionViewModel>()
				.ReverseMap();

			CreateMap<Question, QuestionViewModel>()
				.ReverseMap();

			CreateMap<AnswerViewModel, Answer>()
				.ForMember(answer => answer.Value,
					opt => opt.MapFrom(model => JsonConvert.DeserializeObject(model.Value)))
				.ReverseMap();
		}
	}
}
