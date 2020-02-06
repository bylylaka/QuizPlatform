namespace DiplomServer.Controllers
{
	using DiplomServer.Core.Team.Models;
	using DiplomServer.Domain.Team.Models;
	using DiplomServer.Domain.Team.Services;
	using DiplomServer.Infrastructure;
	using DiplomServer.Infrastructure.Models;
	using Microsoft.AspNetCore.Authentication;
	using Microsoft.AspNetCore.Authentication.Cookies;
	using Microsoft.AspNetCore.Mvc;
	using Microsoft.EntityFrameworkCore;
	using System.Collections.Generic;
	using System.Security.Claims;
	using System.Threading.Tasks;

	[Route("[controller]")]
	public class AuthorizationController : Controller
	{
		private readonly ApplicationContext db;

		private readonly IUserService _userService;

		public AuthorizationController(
			ApplicationContext context,
			IUserService userService)
		{
			db = context;
			_userService = userService;
		}

		[HttpPost]
		[Route("[action]")]
		public async Task<IActionResult> Login([FromBody] LoginModel model)
		{
			if (!ModelState.IsValid)
			{
				return BadRequest(ModelState);
			}

			var user = await _userService.FindUserByEmailAndPasswordAsync(model.Email, model.Password);
			if (user == null)
			{
				return NotFound();
			}
			await Authenticate(user);
			return Ok(user);
		}

		[HttpPost]
		[Route("[action]")]
		public async Task<IActionResult> Register([FromBody] RegistrationModel model)
		{
			if (!ModelState.IsValid)
			{
				return BadRequest(ModelState);
			}

			var user = await db.Users.FirstOrDefaultAsync(u => u.Email == model.Email);    //TODO: move to model
			if (user != null)
			{
				return BadRequest("User already exists");
			}

			var role = await db.Roles.AsNoTracking().FirstAsync(r => r.Name == "user");
			var roleId = role.Id;

			user = db.Users.Add(new User
			{
				Email = model.Email,
				Password = model.Password,
				RoleId = roleId
			}).Entity;
			await db.SaveChangesAsync();

			await Authenticate(user);

			return Ok(user);
		}

		[HttpPost]
		[Route("[action]")]
		public async Task<IActionResult> Logout()
		{
			await HttpContext.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme);
			return Ok();
		}

		private async Task Authenticate(User user)
		{
			var claims = new List<Claim>
			{
				new Claim(ClaimsIdentity.DefaultNameClaimType, user.Email),
				new Claim(ClaimsIdentity.DefaultRoleClaimType, user.Role.Name)
			};
			var id = new ClaimsIdentity(claims, "ApplicationCookie", ClaimsIdentity.DefaultNameClaimType, ClaimsIdentity.DefaultRoleClaimType);
			await HttpContext.SignInAsync(CookieAuthenticationDefaults.AuthenticationScheme, new ClaimsPrincipal(id));
		}
	}
}
