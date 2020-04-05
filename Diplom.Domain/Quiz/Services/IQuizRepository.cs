namespace Diplom.Domain.Quiz.Services
{
	using Diplom.Domain.Quiz.Models;
	using System.Collections.Generic;
	using System.Threading.Tasks;

	public interface IQuizRepository
	{
		Task AddQuiz(Quiz quiz);

		Task<Quiz> FindQuizById(int id);

		Task<List<Quiz>> FindUserQuizList(int userId);

		Task<List<Question>> FindQuestionsByIdList(List<int> ids);
		
		Task AddAnswers(List<Answer> answers);
	}
}
