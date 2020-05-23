namespace Diplom.Application.Contexts.Quiz.UseCases.Events
{
	using Diplom.Application.Contexts.Core.Mediator;

	public class QuizCreated : IEvent
	{
		public Domain.Contexts.Quiz.Models.Quiz Quiz { get; set; }
	}
}
