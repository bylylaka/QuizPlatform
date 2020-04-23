namespace Diplom.WebApi.Contexts.Team.Controllers
{
    using Diplom.Application.Contexts.Team.UseCases.Commands.UpdateProfile;
    using Diplom.Application.Contexts.Team.UseCases.Queries.GetMyProfileSimplified;
    using Diplom.Application.Contexts.Team.UseCases.Queries.GetUser;
    using Diplom.Application.Contexts.Team.UseCases.Queries.SearchByWord;
    using MediatR;
    using Microsoft.AspNetCore.Authorization;
    using Microsoft.AspNetCore.Mvc;
    using System.Threading.Tasks;

    [Route("api/[controller]")]
    public class AccountController : Controller
    {
        private readonly IMediator _mediator;

        public AccountController(
            IMediator mediator)
        {
            _mediator = mediator;
        }

        [Authorize]
        [HttpGet]
        [Route("[action]/{id}")]
        public async Task<IActionResult> GetUser([FromRoute] int id)
        {
            var result = await _mediator.Send(new GetUser(id));

            return Ok(result);
        }

        [Authorize]
        [HttpGet]
        [Route("[action]")]
        public async Task<IActionResult> GetMyProfileSimplified()
        {
            var result = await _mediator.Send(new GetMyProfileSimplified(User));

            return Ok(result);
        }

        [Authorize]
        [HttpGet]
        [Route("[action]/{searchWord}")]
        public async Task<IActionResult> SearchByWord([FromRoute] string searchWord)
        {
            var result = await _mediator.Send(new SearchByWord(searchWord));

            return Ok(result);
        }

        [Authorize]
        [HttpPut]
        [Route("[action]")]
        public async Task<IActionResult> UpdateProfile(
            [FromForm] UpdateProfile command)
        {
            command.Principal = User;

            var result = await _mediator.Send(command);

            return Ok(result);
        }
    }
}
