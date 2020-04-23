namespace Diplom.Application.Contexts.Team.UseCases.Register
{
    public class RegisterResult
    {
        public RegisterResult(int id)
        {
            Id = id;
        }

        public int Id { get; set; }
    }
}
