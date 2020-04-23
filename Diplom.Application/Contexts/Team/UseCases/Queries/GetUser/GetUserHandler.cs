namespace Diplom.Application.Contexts.Team.UseCases.Queries.GetUser
{
    using AutoMapper;
    using Diplom.Application.Contexts.Core.Mediator;
    using Diplom.Domain.Contexts.Core.Exceptions;
    using Diplom.Domain.Contexts.Team.Models;
    using Microsoft.AspNetCore.Identity;
    using Microsoft.EntityFrameworkCore;
    using System.Threading;
    using System.Threading.Tasks;

    public class GetUserHandler : IQueryHandler<GetUser, GetUserResult>
    {
        private readonly IMapper _mapper;

        private readonly UserManager<User> _userManager;

        public GetUserHandler(
            IMapper mapper,
            UserManager<User> userManager)
        {
            _mapper = mapper;
            _userManager = userManager;
        }

        public async Task<GetUserResult> Handle(GetUser request, CancellationToken cancellationToken)
        {
            var user = await _userManager.Users.FirstOrDefaultAsync(u => u.Id == request.Id);
            if (user == null)
            {
                throw new BadRequestException();
            }

            var result = _mapper.Map<GetUserResult>(user);

            return result;
        }
    }
}
