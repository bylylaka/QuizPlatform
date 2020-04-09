namespace Diplom.Domain.Quiz.Services
{
	using Diplom.Domain.Quiz.Models;
	using System.Collections.Generic;
	using System.Linq;
	using System.Threading.Tasks;

	public interface IQuizRepository
	{
		Task<Quiz> GetQuiz(int id);

		Task<List<Answer>> FindQuizAnswers(int quizId);

		Task AddQuiz(Quiz quiz);

		Task<Quiz> FindQuizById(int id);

		Task<List<Quiz>> FindUserQuizList(int userId);

		Task<List<Question>> FindQuestionsByIdList(List<int> ids);

		IQueryable<Quiz> FindQuizesTrackable();

		Task AddAnswers(List<Answer> answers);
	}
}
