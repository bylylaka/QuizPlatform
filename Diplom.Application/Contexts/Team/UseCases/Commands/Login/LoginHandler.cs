using AutoMapper;
using Diplom.Application.Contexts.Core.Mediator;
using Diplom.Domain.Contexts.Core.Exceptions;
using Diplom.Domain.Contexts.Team.Models;
using Microsoft.AspNetCore.Identity;
using System.Threading;
using System.Threading.Tasks;

namespace Diplom.Application.Contexts.Team.UseCases.Commands.Login
{
    public class LoginHandler : ICommandHandler<Login, LoginResult>
    {
        private readonly IMapper _mapper;

        private readonly UserManager<User> _userManager;

        private readonly SignInManager<User> _signInManager;

        public LoginHandler(
            IMapper mapper,
            UserManager<User> userManager,
            SignInManager<User> signInManager)
        {
            _mapper = mapper;
            _userManager = userManager;
            _signInManager = signInManager;
        }

        public async Task<LoginResult> Handle(Login request, CancellationToken cancellationToken)
        {
            var loginResult =
                 await _signInManager.PasswordSignInAsync(request.Email, request.Password, true, false);

            if (!loginResult.Succeeded)
            {
                throw new UnauthorizedException();
            }

            var currentProfile = await _userManager.FindByEmailAsync(request.Email);
            return new LoginResult(currentProfile.Id);
        }
    }
}
