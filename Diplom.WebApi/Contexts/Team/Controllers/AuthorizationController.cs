namespace Diplom.WebApi.Contexts.Team.Controllers
{
    using Diplom.Application.Contexts.Team.UseCases.Login;
	using Diplom.Application.Contexts.Team.UseCases.Logout;
	using Diplom.Application.Contexts.Team.UseCases.Register;
	using MediatR;
	using Microsoft.AspNetCore.Mvc;
	using System.Threading.Tasks;

	[Route("api/[controller]")]
	public class AuthorizationController : Controller
	{
		private readonly IMediator _mediator;

		public AuthorizationController(
			IMediator mediator)
		{
			_mediator = mediator;
		}

		[HttpPost]
		[Route("[action]")]
		public async Task<IActionResult> Login([FromBody] Login command)
		{
			if (!ModelState.IsValid)
			{
				return BadRequest(ModelState);
			}

			var result = await _mediator.Send(command);

			return Ok(result);
		}

		[HttpGet]
		[Route("[action]")]
		public IActionResult IsAuthorized()
		{
			return Ok(User.Identity.IsAuthenticated);
		}

		[HttpPost]
		[Route("[action]")]
		public async Task<IActionResult> Register([FromBody] Register command)
		{
			if (!ModelState.IsValid)
			{
				return BadRequest(ModelState);
			}

			var result = await _mediator.Send(command);

			return Ok(result);
		}

		[HttpPost]
		[Route("[action]")]
		public async Task<IActionResult> Logout()
		{
			await _mediator.Send(new Logout());

			return Ok();
		}
	}
}
