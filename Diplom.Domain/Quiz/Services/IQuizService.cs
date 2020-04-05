﻿namespace Diplom.Domain.Quiz.Services
{
	using Diplom.Domain.Quiz.Models;
	using System.Collections.Generic;
	using System.Threading.Tasks;

	public interface IQuizService
	{
		Task AddQuiz(Quiz quiz);

		Task<Quiz> GetQuizById(int id);

		Task<List<Question>> GetQuestionsByIdList(List<int> ids);

		Task AddAnswers(List<Answer> answers);

		Task ProcessAnswers(List<Answer> answers);
	}
}
