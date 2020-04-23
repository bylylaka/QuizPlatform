﻿namespace Diplom.Application.Contexts.Quiz.UseCases.Commands.CreateQuiz
{
    using AutoMapper;
    using Diplom.Application.Contexts.Core.Mediator;
    using Diplom.Domain.Contexts.Core.Repositories;
    using Diplom.Domain.Contexts.Team.Models;
    using MediatR;
    using Microsoft.AspNetCore.Identity;
    using System.Threading;
    using System.Threading.Tasks;

    public class CreateQuizHandler : ICommandHandler<CreateQuiz>
    {
        private readonly IMapper _mapper;

        private readonly UserManager<User> _userManager;

        private readonly IUnitOfWork _unitOfWork;

        public CreateQuizHandler(
            IMapper mapper,
            UserManager<User> userManager,
            IUnitOfWork unitOfWork)
        {
            _mapper = mapper;
            _userManager = userManager;
            _unitOfWork = unitOfWork;
        }

        public async Task<Unit> Handle(CreateQuiz request, CancellationToken cancellationToken)
        {
            var user = await _userManager.GetUserAsync(request.Principal);

            var quiz = _mapper.Map<Domain.Contexts.Quiz.Models.Quiz>(request);
            quiz.UserId = user.Id;

            await _unitOfWork.Quizes.AddQuiz(quiz);

            return Unit.Value;
        }
    }
}
