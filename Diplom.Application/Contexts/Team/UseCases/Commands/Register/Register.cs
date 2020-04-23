using Diplom.Application.Contexts.Core.Mediator;

namespace Diplom.Application.Contexts.Team.UseCases.Commands.Register
{
    public class Register : ICommand<RegisterResult>
    {
        public string Email { get; set; }

        public string Password { get; set; }

        public string ConfirmPassword { get; set; }
    }
}
