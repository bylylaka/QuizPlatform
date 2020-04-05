namespace Diplom.Domain.Quiz.Services
{
	using Diplom.Domain.Exceptions;
	using Diplom.Domain.Quiz.Models;
	using System.Collections.Generic;
	using System.Threading.Tasks;

	public class QuizService : IQuizService
	{
		private readonly IQuizRepository _quizRepository;

		public QuizService(
			IQuizRepository quizRepository)
		{
			_quizRepository = quizRepository;
		}

		public async Task AddAnswers(List<Answer> answers)
		{
			await _quizRepository.AddAnswers(answers);
		}

		public async Task AddQuiz(Quiz quiz)
		{
			await _quizRepository.AddQuiz(quiz);
		}

		public async Task<List<Question>> GetQuestionsByIdList(List<int> ids)
		{
			return await _quizRepository.FindQuestionsByIdList(ids);
		}

		public async Task<Quiz> GetQuizById(int id)
		{
			var quiz = await _quizRepository.FindQuizById(id);

			if (quiz == null)
			{
				throw new BadRequestException();
			}

			return quiz;
		}
	}
}
