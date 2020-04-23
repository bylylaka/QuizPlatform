namespace Diplom.WebApi
{
    using AutoMapper;
    using Diplom.Application.Contexts.Team.Models;
    using Diplom.Application.Contexts.Team.UseCases.Queries.GetUser;
    using Diplom.Domain.Contexts.Quiz.Models;
    using Diplom.Domain.Contexts.Team.Models;
    using Diplom.WebApi.Contexts.Quiz.Models;
    using Newtonsoft.Json;

    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            MapForUser();
            MapForQuiz();
        }

        public void MapForUser()
        {
            CreateMap<User, GetUserResult>()
              .ForMember(um => um.Name,
              opt => opt.MapFrom(u => u.UserName));

            CreateMap<User, UserSimplifiedViewModel>()
                .ForMember(um => um.Name,
                opt => opt.MapFrom(u => u.UserName));

            CreateMap<User, UserOutputViewModel>();
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
