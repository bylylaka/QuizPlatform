namespace Diplom.Application.Contexts.Quiz.Models
{
    using Diplom.Application.Contexts.Team.Models;

    public class StatisticAnswerViewModel
    {
        public object Value { get; set; }

        public UserOutputViewModel Participant { get; set; }
    }
}
