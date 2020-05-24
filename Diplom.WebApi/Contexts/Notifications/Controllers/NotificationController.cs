namespace Diplom.WebApi.Contexts.Notifications.Controllers
{
	using Diplom.Application.Contexts.Notifications.Notifications.SiteNotifications.UseCases.Queries.GetSiteNotifications;
	using Diplom.Application.Contexts.Notifications.Subscriptions.UseCases.Commands.ChagneSubscriptionStatus;
	using Diplom.Application.Contexts.Notifications.Subscriptions.UseCases.Queries.GetSubscriptionStatus;
	using Diplom.Application.Contexts.Team.UseCases.Queries.GetMyProfileSimplified;
	using MediatR;
	using Microsoft.AspNetCore.Authorization;
	using Microsoft.AspNetCore.Mvc;
	using System.Threading.Tasks;

	[Route("api/[controller]")]
	public class NotificationController : Controller
	{
		private readonly IMediator _mediator;

		public NotificationController(
			IMediator mediator)
		{
			_mediator = mediator;
		}

		[Authorize]
		[HttpGet]
		[Route("[action]/{producerId}")]
		public async Task<IActionResult> GetSubscriptionStatus(int producerId)
		{
			var consumer = await _mediator.Send(new GetMyProfileSimplified(User));

			var query = new GetSubscriptionStatus(consumer.Id, producerId);
			var result = await _mediator.Send(query);

			return Ok(result.Subscribe);
		}

		[Authorize]
		[HttpPut]
		[Route("[action]")]
		public async Task<IActionResult> ChagneSubsciptionStatus([FromBody] ChagneSubscriptionStatus command)
		{
			var consumer = await _mediator.Send(new GetMyProfileSimplified(User));

			command.ConsumerId = consumer.Id;

			var result = await _mediator.Send(command);

			return Ok(result);
		}

		[Authorize]
		[HttpGet]
		[Route("[action]")]
		public async Task<IActionResult> GetSiteNotifications()
		{
			var consumer = await _mediator.Send(new GetMyProfileSimplified(User));

			var query = new GetSiteNotifications(consumer.Id);
			var result = await _mediator.Send(query);

			return Ok(result.Notifications);
		}
	}
}
