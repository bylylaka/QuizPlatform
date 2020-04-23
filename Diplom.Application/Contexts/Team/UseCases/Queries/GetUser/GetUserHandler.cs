namespace Diplom.Application.Contexts.Team.UseCases.Queries.GetUser
{
    using AutoMapper;
    using Diplom.Application.Contexts.Core.Mediator;
    using Diplom.Domain.Contexts.Core.Exceptions;
    using Diplom.Domain.Contexts.Team.Services;
    using System.Threading;
    using System.Threading.Tasks;

    public class GetUserHandler : IQueryHandler<GetUser, GetUserResult>
    {
        private readonly IMapper _mapper;

        private readonly IUserService _userService;

        public GetUserHandler(
            IMapper mapper,
            IUserService userService)
        {
            _mapper = mapper;
            _userService = userService;
        }

        public async Task<GetUserResult> Handle(GetUser request, CancellationToken cancellationToken)
        {
            var user = await _userService.FindUserById(request.Id);
            if (user == null)
            {
                throw new BadRequestException();
            }

            var result = _mapper.Map<GetUserResult>(user);

            return result;
        }
    }
}