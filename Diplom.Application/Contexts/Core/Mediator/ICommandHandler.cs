namespace Diplom.Application.Contexts.Core.Mediator
{
    using MediatR;

    public interface ICommandHandler<T, V> : IRequestHandler<T, V> where T : ICommand<V>
    {
    }

    public interface ICommandHandler<T> : IRequestHandler<T> where T : ICommand
    {
    }
}
