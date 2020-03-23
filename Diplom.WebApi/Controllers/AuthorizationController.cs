namespace DiplomServer.Controllers
{
	using Diplom.Core.Team.Models;
	using Diplom.Domain.Team.Models;
	using Microsoft.AspNetCore.Authorization;
	using Microsoft.AspNetCore.Identity;
	using Microsoft.AspNetCore.Mvc;
	using System.Threading.Tasks;

	[Route("api/[controller]")]
	public class AuthorizationController : Controller
	{
		private readonly UserManager<User> _userManager;

		private readonly SignInManager<User> _signInManager;

		public AuthorizationController(
			UserManager<User> userManager,
			SignInManager<User> signInManager)
		{
			_userManager = userManager;
			_signInManager = signInManager;
		}

		[HttpPost]
		[Route("[action]")]
		public async Task<IActionResult> Login([FromBody] LoginModel model)
		{
			if (!ModelState.IsValid)
			{
				return BadRequest(ModelState);
			}

			var logonResult =
				await _signInManager.PasswordSignInAsync(model.Email, model.Password, true, false);

			if (!logonResult.Succeeded)
			{
				return Unauthorized();
			}
			return Ok();
		}

		[HttpGet]
		//[Authorize]
		[Route("[action]")]
		public IActionResult IsAuthorized()
		{
			return Ok(User.Identity.IsAuthenticated);
		}

		[HttpPost]
		[Route("[action]")]
		public async Task<IActionResult> Register([FromBody] RegistrationModel model)
		{
			if (!ModelState.IsValid)
			{
				return BadRequest(ModelState);
			}

			var user = new User { Email = model.Email, UserName = model.Email };
			var registerResult = await _userManager.CreateAsync(user, model.Password);


			await _userManager.AddToRoleAsync(user, "user");

			if (!registerResult.Succeeded)
			{
				return BadRequest(registerResult.Errors);
			}

			await _signInManager.SignInAsync(user, false);
			return Ok();
		}

		[HttpPost]
		[Route("[action]")]
		public async Task<IActionResult> Logout()
		{
			await _signInManager.SignOutAsync();
			return Ok();
		}
	}
}
