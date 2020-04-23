namespace Diplom.Infrastructure.Contexts.Quiz.Repositories
{
    using Diplom.Domain.Contexts.Quiz.Models;
    using Diplom.Domain.Contexts.Quiz.Services;
    using Microsoft.EntityFrameworkCore;
    using System.Collections.Generic;
	using System.Linq;
	using System.Threading.Tasks;

	public class QuizRepository : IQuizRepository
	{
		private readonly ApplicationContext _appContext;

		public QuizRepository(ApplicationContext appContext)
		{
			_appContext = appContext;
		}

		public async Task AddAnswers(List<Answer> answers)
		{
			await _appContext.Answers.AddRangeAsync(answers);
			await _appContext.SaveChangesAsync();
		}

		public async Task AddQuiz(Quiz quiz)
		{
			await _appContext.AddAsync(quiz);
			await _appContext.SaveChangesAsync();
		}

		public async Task<List<Question>> FindQuestionsByIdList(List<int> ids)
		{
			return await _appContext.Questions
				.Where(q => ids.Contains(q.Id))
				.ToListAsync();
		}

		public async Task<Quiz> FindQuizById(int id)
		{
			return await _appContext.Quiz
				.Include(q => q.Questions)
				.ThenInclude(q => q.Options)
				.Where(q => q.Id == id)
				.FirstOrDefaultAsync();
		}

		public IQueryable<Quiz> FindQuizesTrackable()
		{
			return _appContext.Quiz
				.AsQueryable()
				.Include(q => q.User);
		}

		public async Task<List<Quiz>> FindUserQuizList(int userId)
		{
			return await _appContext.Quiz
				.Where(q => q.UserId == userId)
				.ToListAsync();
		}

		public async Task<Quiz> GetQuiz(int id)
		{
			return await _appContext.Quiz
				.FirstOrDefaultAsync(q => q.Id == id);
		}

		public async Task<List<Answer>> FindQuizAnswers(int quizId)
		{
			return await _appContext.Answers
				.Include(a => a.User)
				.Where(a => a.QuizId == quizId)
				.ToListAsync();
		}

		public async Task<List<Option>> FindQuizOptions(int quizId)
		{
			return await _appContext.Quiz
				.Include(q => q.Questions)
				.ThenInclude(q => q.Options)
				.SelectMany(q => q.Questions)
				.SelectMany(q => q.Options)
				.ToListAsync();
		}
	}
}
