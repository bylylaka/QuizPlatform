namespace Diplom.Application.Contexts.Quiz.Models
{
    using System.Collections.Generic;

    public class StatisticQuizViewModel
    {
        public string Title { get; set; }

        public List<StatisticQuestionViewModel> Questions { get; set; }
    }
}
