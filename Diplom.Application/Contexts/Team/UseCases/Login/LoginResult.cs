namespace Diplom.Application.Contexts.Team.UseCases.Login
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
