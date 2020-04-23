namespace Diplom.WebApi
{
    using AutoMapper;
    using Diplom.Domain.Contexts.Team.Models;
    using Newtonsoft.Json;
    using Newtonsoft.Json.Linq;
    using Diplom.Domain.Contexts.Quiz.Models;
    using Diplom.WebApi.Contexts.Team.Models.Profile;
    using Diplom.WebApi.Contexts.Quiz.Models;

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

            CreateMap<Quiz, QuizSearchViewModel>()
                .ForMember(model => model.QuizId,
                opt => opt.MapFrom(q => q.Id));

            CreateMap<Option, OptionViewModel>()
                .ReverseMap();

            CreateMap<Question, QuestionViewModel>()
                .ReverseMap();

            CreateMap<AnswerViewModel, Answer>()
                .ForMember(answer => answer.Value,
                    opt => opt.MapFrom(model => JsonConvert.DeserializeObject(model.Value)))
                .ReverseMap();

            CreateMap<Answer, StatisticAnswerViewModel>()
                .ForMember(model => model.Participant,
                opt => opt.MapFrom(a => a.User))
                .ReverseMap();
        }
    }
}
