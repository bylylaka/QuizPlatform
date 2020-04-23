namespace Diplom.Application.Contexts.Quiz.UseCases.Commands.AnswerQuiz
{
    using AutoMapper;
    using Diplom.Application.Contexts.Core.Mediator;
    using Diplom.Domain.Contexts.Core.Repositories;
    using Diplom.Domain.Contexts.Quiz.Models;
    using Diplom.Domain.Contexts.Team.Models;
    using MediatR;
    using Microsoft.AspNetCore.Identity;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading;
    using System.Threading.Tasks;

    public class AnswerQuizHandler : ICommandHandler<AnswerQuiz>
    {
        private readonly IMapper _mapper;

        private readonly UserManager<User> _userManager;

        private readonly IUnitOfWork _unitOfWork;

        public AnswerQuizHandler(
            IMapper mapper,
            UserManager<User> userManager,
            IUnitOfWork unitOfWork)
        {
            _mapper = mapper;
            _userManager = userManager;
            _unitOfWork = unitOfWork;
        }

        public async Task<Unit> Handle(AnswerQuiz request, CancellationToken cancellationToken)
        {
            var user = await _userManager.GetUserAsync(request.Principal);
            var answers = request.Answers
                .Select(am => _mapper.Map<Answer>(am))
                .ToList();
            answers.ForEach(a => a.UserId = user.Id);

            await ProcessAnswers(answers);
            await _unitOfWork.Quizes.AddAnswers(answers);

            return Unit.Value;
        }

        private async Task ProcessAnswers(List<Answer> answers)
        {
            var questionsIds = answers
                .Select(answer => answer.QuestionId)
                .ToList();

            var questions = await _unitOfWork.Quizes.FindQuestionsByIdList(questionsIds);

            foreach (var question in questions)
            {
                var answer = answers.First(a => a.QuestionId == question.Id);

                switch (question.Type)
                {
                    case QuestionType.Text:
                        break;
                    case QuestionType.Checkbox:
                        break;
                    case QuestionType.Number:
                        break;
                    case QuestionType.Date:
                        answer.Value = DateTime.Parse((string)answer.Value);
                        break;
                    case QuestionType.Select:
                        break;
                }
            }
        }
    }
}
