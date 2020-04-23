namespace Diplom.WebApi.Contexts.Quiz.Models
{
    using Diplom.Domain.Contexts.Quiz.Models;
    using System.Collections.Generic;

    public class StatisticQuestionViewModel
	{
		public string Title { get; set; }

		public QuestionType Type { get; set; }

		public List<StatisticAnswerViewModel> Answers { get; set; }

		public List<OptionViewModel> Options { get; set; }
	}
}
