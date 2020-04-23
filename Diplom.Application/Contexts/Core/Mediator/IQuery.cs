namespace Diplom.Application.Contexts.Core.Mediator
{
    using MediatR;

    public interface IQuery<T> : IRequest<T>
    {
    }
}
