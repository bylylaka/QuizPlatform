using Diplom.Application.Contexts.Core.Mediator;
using Diplom.Domain.Contexts.Core.Exceptions;
using Diplom.Domain.Contexts.Team.Models;
using Microsoft.AspNetCore.Identity;
using System.Threading;
using System.Threading.Tasks;

namespace Diplom.Application.Contexts.Team.UseCases.Commands.Register
{
    public class RegisterHandler : ICommandHandler<Register, RegisterResult>
    {
		private readonly UserManager<User> _userManager;

		private readonly SignInManager<User> _signInManager;

		public RegisterHandler(
			UserManager<User> userManager,
			SignInManager<User> signInManager)
		{
			_userManager = userManager;
			_signInManager = signInManager;
		}

		public async Task<RegisterResult> Handle(Register request, CancellationToken cancellationToken)
        {
			var user = new User { Email = request.Email, UserName = request.Email };
			var registerResult = await _userManager.CreateAsync(user, request.Password);

			await _userManager.AddToRoleAsync(user, "user");

			if (!registerResult.Succeeded)
			{
				throw new BadRequestException();
			}

			await _signInManager.SignInAsync(user, false);

			var currentProfile = await _userManager.FindByEmailAsync(request.Email);
			return new RegisterResult(currentProfile.Id);
		}
    }
}
