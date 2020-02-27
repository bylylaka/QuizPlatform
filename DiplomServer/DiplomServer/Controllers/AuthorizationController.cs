namespace DiplomServer.Controllers
{
	using DiplomServer.Core.Team.Models;
	using DiplomServer.Domain.Team.Models;
	using DiplomServer.Domain.Team.Services;
	using DiplomServer.Domain.Team.Validators;
	using DiplomServer.Infrastructure;
	using Microsoft.AspNetCore.Identity;
	using Microsoft.AspNetCore.Mvc;
    using System.Linq;
    using System.Threading.Tasks;

	[Route("[controller]")]
	public class AuthorizationController : Controller
	{
		private readonly ApplicationContext _dbContext;

		private readonly UserManager<User> _userManager;

		private readonly SignInManager<User> _signInManager;

		private readonly IUserService _userService;

		private readonly IRoleService _roleService;

		public AuthorizationController(
			ApplicationContext dbContext,
			IUserService userService,
			UserManager<User> userManager,
			SignInManager<User> signInManager,
			IRoleService roleService)
		{
			_dbContext = dbContext;
			_userService = userService;
			_userManager = userManager;
			_signInManager = signInManager;
			_roleService = roleService;
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

		[HttpPost]
		[Route("[action]")]
		public async Task<IActionResult> Register(/*[FromBody]*/ RegistrationModel model)
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
