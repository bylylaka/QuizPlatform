namespace Diplom.Domain.Quiz.Services
{
	using Diplom.Domain.Exceptions;
	using Diplom.Domain.Quiz.Models;
	using Diplom.Domain.Team.Models;
	using Microsoft.AspNetCore.Identity;
	using Microsoft.EntityFrameworkCore;
	using System;
	using System.Collections.Generic;
	using System.Linq;
	using System.Threading.Tasks;

	public class QuizService : IQuizService
	{
		private readonly UserManager<User> _userManager;

		private readonly IQuizRepository _quizRepository;

		public QuizService(
			UserManager<User> userManager,
			IQuizRepository quizRepository)
		{
			_userManager = userManager;
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

		public async Task<List<Quiz>> GetUserQuizList(int userId)
		{
			var user = await _userManager.Users.FirstOrDefaultAsync(u => u.Id == userId);
			if (user == null)
			{
				throw new BadRequestException();
			}

			return await _quizRepository.FindUserQuizList(userId);
		}

		public async Task<List<Quiz>> GetQuizesBySearchWord(string word)
		{
			var quizesAsQuery = _quizRepository.FindQuizesTrackable();
			var filteredQuizes = await quizesAsQuery
				.Where(q => q.Title.Contains(word))
				.ToListAsync();

			return filteredQuizes;
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
