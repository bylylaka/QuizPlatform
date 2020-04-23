namespace Diplom.Application.Contexts.Core.Mediator
{
    using MediatR;

    public interface ICommand<T> : IRequest<T>
    {
    }

    public interface ICommand : IRequest
    {
    }
}
