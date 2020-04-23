using Diplom.Application.Contexts.Core.Mediator;
using System.ComponentModel.DataAnnotations;

namespace Diplom.Application.Contexts.Team.UseCases.Login
{
    public class Login : ICommand<LoginResult>
    {
        [Required(ErrorMessage = "Не указан Email")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Не указан пароль")]
        [DataType(DataType.Password)]
        public string Password { get; set; }
    }
}
