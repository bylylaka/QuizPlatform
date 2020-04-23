namespace Diplom.Application.Contexts.Team.UseCases.Queries.GetMyProfileSimplified
{
    public class GetMyProfileSimplifiedResult
    {
        public GetMyProfileSimplifiedResult(int id)
        {
            Id = id;
        }

        public int Id { get; set; }
    }
}
