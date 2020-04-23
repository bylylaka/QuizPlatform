using Diplom.Application.Contexts.Core.Mediator;
using Diplom.Domain.Contexts.Team.Models;
using MediatR;
using Microsoft.AspNetCore.Identity;
using System.Threading;
using System.Threading.Tasks;

namespace Diplom.Application.Contexts.Team.UseCases.Logout
{
    public class LogoutHandler : ICommandHandler<Logout>
    {
        private readonly SignInManager<User> _signInManager;

        public LogoutHandler(
            SignInManager<User> signInManager)
        {
            _signInManager = signInManager;
        }

        public async Task<Unit> Handle(Logout request, CancellationToken cancellationToken)
        {
            await _signInManager.SignOutAsync();

            return Unit.Value;
        }
    }
}
