namespace Diplom.Application.Contexts.Quiz.UseCases.Queries.GetUserQuizList
{
    using AutoMapper;
    using Diplom.Application.Contexts.Core.Mediator;
    using Diplom.Application.Contexts.Quiz.Models;
    using Diplom.Application.Contexts.Team.UseCases.Queries.GetUser;
    using Diplom.Domain.Contexts.Core.Exceptions;
    using Diplom.Domain.Contexts.Core.Repositories;
    using Diplom.Domain.Contexts.Quiz.Services;
    using Diplom.Domain.Contexts.Team.Models;
    using MediatR;
    using Microsoft.AspNetCore.Identity;
    using Microsoft.EntityFrameworkCore;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading;
    using System.Threading.Tasks;

    public class GetUserQuizListHandler : IQueryHandler<GetUserQuizList, List<QuizViewModel>>
    {
        private readonly IMapper _mapper;

        private readonly IMediator _mediator;

        private readonly IUnitOfWork _unitOfWork;

        private readonly UserManager<User> _userManager;

        public GetUserQuizListHandler(
            IMapper mapper,
            IUnitOfWork unitOfWork,
            UserManager<User> userNameger)
        {
            _mapper = mapper;
            _unitOfWork = unitOfWork;
            _userManager = userNameger;
        }

        public async Task<List<QuizViewModel>> Handle(GetUserQuizList request, CancellationToken cancellationToken)
        {
            var quizList = await _unitOfWork.Quizes.FindUserQuizList(request.Id);

            var result = quizList
                .Select(q => _mapper.Map<QuizViewModel>(q))
                .ToList();

            return result;
        }
    }
}
