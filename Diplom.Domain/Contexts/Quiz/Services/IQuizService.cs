namespace Diplom.Domain.Contexts.Quiz.Services
{
	using System.Collections.Generic;
	using System.Threading.Tasks;

	public interface IQuizService
	{
		Task AddQuiz(Models.Quiz quiz);

		Task<Models.Quiz> GetQuizById(int id);

		Task<List<Models.Quiz>> GetUserQuizList(int userId);

		Task<List<Models.Answer>> GetQuizAnswers(int quizId);

		Task<List<Models.Option>> GetQuizOptions(int quizId);

		Task<List<Models.Question>> GetQuestionsByIdList(List<int> ids);

		Task<List<Models.Quiz>> GetQuizesBySearchWord(string word);

		Task AddAnswers(List<Models.Answer> answers);
	}
}
