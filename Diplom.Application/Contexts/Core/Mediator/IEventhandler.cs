namespace Diplom.Application.Contexts.Core.Mediator
{
	using MediatR;

	public interface IEventhandler<in TEvent> : INotificationHandler<TEvent>
		where TEvent : IEvent
	{
	}
}
