namespace Diplom.Application.Contexts.Team.UseCases.Queries.GetUser
{
    using Diplom.Application.Contexts.Core.Mediator;

    public class GetUser : IQuery<GetUserResult>
    {
        public GetUser(int id)
        {
            Id = id;
        }

        public int Id { get; set; }
    }
}
