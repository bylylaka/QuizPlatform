namespace Diplom.Domain.Contexts.Quiz.Services
{
    using Diplom.Domain.Contexts.Core.Exceptions;
    using Diplom.Domain.Contexts.Core.Repositories;
    using Diplom.Domain.Contexts.Quiz.Models;
    using Diplom.Domain.Contexts.Team.Models;
    using Microsoft.AspNetCore.Identity;
	using Microsoft.EntityFrameworkCore;
	using System;
	using System.Collections.Generic;
	using System.Linq;
	using System.Threading.Tasks;

	public class QuizService : IQuizService
	{
		private readonly UserManager<User> _userManager;

		private readonly IUnitOfWork _unitOfWork;

		public QuizService(
			UserManager<User> userManager,
			IUnitOfWork unitOfWork)
		{
			_userManager = userManager;
			_unitOfWork = unitOfWork;
		}

		public async Task AddAnswers(List<Answer> answers)
		{
			await ProcessAnswers(answers);
			await _unitOfWork.Quizes.AddAnswers(answers);
		}

		public async Task AddQuiz(Quiz quiz)
		{
			await _unitOfWork.Quizes.AddQuiz(quiz);
		}

		public async Task<List<Question>> GetQuestionsByIdList(List<int> ids)
		{
			return await _unitOfWork.Quizes.FindQuestionsByIdList(ids);
		}

		public async Task<Quiz> GetQuizById(int id)
		{
			var quiz = await _unitOfWork.Quizes.FindQuizById(id);

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

			return await _unitOfWork.Quizes.FindUserQuizList(userId);
		}

		public async Task<List<Quiz>> GetQuizesBySearchWord(string word)
		{
			var quizesAsQuery = _unitOfWork.Quizes.FindQuizesTrackable();

			var filteredQuizes = await quizesAsQuery
				.Where(q => q.Title.ToLower().Contains(word.ToLower()))
				.ToListAsync();

			return filteredQuizes;
		}

		private async Task ProcessAnswers(List<Answer> answers)
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

		public async Task<List<Answer>> GetQuizAnswers(int quizId)
		{
			var quiz = await _unitOfWork.Quizes.FindQuizById(quizId);

			if (quiz == null)
			{
				throw new BadRequestException();
			}

			return await _unitOfWork.Quizes.FindQuizAnswers(quizId);
		}

		public async Task<List<Option>> GetQuizOptions(int quizId)
		{
			var quiz = await _unitOfWork.Quizes.FindQuizById(quizId);

			if (quiz == null)
			{
				throw new BadRequestException();
			}

			return await _unitOfWork.Quizes.FindQuizOptions(quizId);
		}
	}
}
