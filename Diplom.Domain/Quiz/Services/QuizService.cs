namespace Diplom.Domain.Quiz.Services
{
	using Diplom.Domain.Exceptions;
	using Diplom.Domain.Quiz.Models;
	using System;
	using System.Collections.Generic;
	using System.Linq;
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

		public async Task ProcessAnswers(List<Answer> answers)
		{
			var questionsIds = answers
				.Select(answer => answer.QuestionId)
				.ToList();

			var questions = await GetQuestionsByIdList(questionsIds);

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
