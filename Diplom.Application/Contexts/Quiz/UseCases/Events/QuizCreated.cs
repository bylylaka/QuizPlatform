namespace Diplom.Application.Contexts.Quiz.UseCases.Events
{
	using Diplom.Application.Contexts.Core.Mediator;
	using Diplom.Domain.Contexts.Quiz.Models;

	public class QuizCreated : IEvent
	{
		public QuizCreated(Quiz quiz)
		{
			Quiz = quiz;
		}

		public Domain.Contexts.Quiz.Models.Quiz Quiz { get; }
	}
}
