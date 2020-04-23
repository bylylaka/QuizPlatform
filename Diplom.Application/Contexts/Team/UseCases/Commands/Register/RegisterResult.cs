namespace Diplom.Application.Contexts.Team.UseCases.Commands.Register
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
