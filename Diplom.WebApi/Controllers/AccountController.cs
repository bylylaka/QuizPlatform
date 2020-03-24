namespace Diplom.Controllers
{
	using AutoMapper;
	using Diplom.Domain.Team.Models;
	using Diplom.WebApi.Models;
	using Microsoft.AspNetCore.Authorization;
	using Microsoft.AspNetCore.Identity;
	using Microsoft.AspNetCore.Mvc;
	using System.Threading.Tasks;

	[Route("api/[controller]")]
	public class AccountController : Controller
	{
		private readonly IMapper _mapper;
		private readonly UserManager<User> _userManager;

		public AccountController(
			IMapper mapper,
			UserManager<User> userManager)
		{
			_mapper = mapper;
			_userManager = userManager;
		}

		[Authorize]
		[HttpGet]
		[Route("[action]")]
		public async Task<IActionResult> GetProfile()
		{
			var user = await _userManager.GetUserAsync(User);
			var model = _mapper.Map<UserViewModel>(user);

			return Ok(model);
		}
	}
}
