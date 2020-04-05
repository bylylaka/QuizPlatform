namespace Diplom.Infrastructure.Qiuz
{
	using Diplom.Domain.Quiz.Models;
	using Diplom.Domain.Quiz.Services;
	using System.Threading.Tasks;
	using System.Linq;
	using Microsoft.EntityFrameworkCore;
	using System.Collections.Generic;

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
	}
}
