using Diplom.Application.Contexts.Team.Models;

namespace Diplom.WebApi.Contexts.Quiz.Models
{
	public class StatisticAnswerViewModel
	{
		public object Value { get; set; }

		public UserOutputViewModel Participant { get; set; }
	}
}
