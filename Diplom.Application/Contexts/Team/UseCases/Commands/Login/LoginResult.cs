namespace Diplom.Application.Contexts.Team.UseCases.Commands.Login
{
    public class LoginResult
    {
        public LoginResult(int id)
        {
            Id = id;
        }

        public int Id { get; set; }
    }
}
