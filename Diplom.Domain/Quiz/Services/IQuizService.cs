namespace Diplom.Domain.Quiz.Services
{
	using Diplom.Domain.Quiz.Models;
	using Diplom.Domain.Team.Models;
	using System.Collections.Generic;
	using System.Threading.Tasks;

	public interface IQuizService
	{
		Task AddQuiz(Quiz quiz);

		Task<Quiz> GetQuizById(int id);

		Task<List<Quiz>> GetUserQuizList(int userId);

		Task<List<Answer>> GetQuizAnswers(int quizId);

		Task<List<Option>> GetQuizOptions(int quizId);

		Task<List<Question>> GetQuestionsByIdList(List<int> ids);

		Task<List<Quiz>> GetQuizesBySearchWord(string word);

		Task AddAnswers(List<Answer> answers);
	}
}
