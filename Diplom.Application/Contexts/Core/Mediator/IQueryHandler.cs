namespace Diplom.Application.Contexts.Core.Mediator
{
    using MediatR;

    public interface IQueryHandler<T, V> : IRequestHandler<T, V> where T : IQuery<V>
    {
    }
}
