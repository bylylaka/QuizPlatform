namespace Diplom.Application.Contexts.Quiz.UseCases.Queries.GetQuiz
{
    using AutoMapper;
    using Diplom.Application.Contexts.Core.Mediator;
    using Diplom.Application.Contexts.Quiz.Models;
    using Diplom.Domain.Contexts.Core.Exceptions;
    using Diplom.Domain.Contexts.Core.Repositories;
    using System.Threading;
    using System.Threading.Tasks;

    public class GetQuizHandler : IQueryHandler<GetQuiz, QuizViewModel>
    {
        private readonly IMapper _mapper;

        private readonly IUnitOfWork _unitOfWork;

        public GetQuizHandler(
            IMapper mapper,
            IUnitOfWork unitOfWork)
        {
            _mapper = mapper;
            _unitOfWork = unitOfWork;
        }

        public async Task<QuizViewModel> Handle(GetQuiz request, CancellationToken cancellationToken)
        {
            var quiz = await _unitOfWork.Quizes.FindQuizById(request.Id);

            if (quiz == null)
            {
                throw new BadRequestException();
            }

            var result = _mapper.Map<QuizViewModel>(quiz);

            return result;
        }
    }
}
