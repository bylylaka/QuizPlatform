namespace Diplom.WebApi.Models.Quiz
{
	using Diplom.Domain.Quiz.Models;
    using System.Collections.Generic;

    public class StatisticQuestionViewModel
	{
		public string Title { get; set; }

		public QuestionType Type { get; set; }

		public List<StatisticAnswerViewModel> Answers { get; set; }
	}
}
