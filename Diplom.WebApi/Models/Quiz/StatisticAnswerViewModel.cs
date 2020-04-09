using Diplom.WebApi.Models.User;

namespace Diplom.WebApi.Models.Quiz
{
	public class StatisticAnswerViewModel
	{
		public object Value { get; set; }

		public UserOutputViewModel Participant { get; set; }
	}
}
