namespace DiplomServer.Controllers
{
	using DiplomServer.Core.Models;
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
	public class AccountController : Controller
	{
		private readonly ApplicationContext db;

		public AccountController(ApplicationContext context)
		{
			db = context;
		}

		[HttpPost]
		[Route("[action]")]
		public async Task<IActionResult> Login([FromBody] LoginModel model)
		{
			if (!ModelState.IsValid)
			{
				return BadRequest(ModelState);
			}

			User user = await db.Users.FirstOrDefaultAsync(u => u.Email == model.Email && u.Password == model.Password);
			if (user == null)
			{
				return NotFound();
			}
			await Authenticate(model.Email);
			return Ok(user);
		}

		[HttpPost]
		[Route("[action]")]
		public async Task<IActionResult> Register([FromBody] RegisterModel model)
		{
			if (!ModelState.IsValid)
			{
				return BadRequest(ModelState);
			}

			User user = await db.Users.FirstOrDefaultAsync(u => u.Email == model.Email);
			if (user != null)
			{
				return BadRequest("User already exists");
			}

			user = db.Users.Add(new User { Email = model.Email, Password = model.Password }).Entity;
			await db.SaveChangesAsync();

			await Authenticate(model.Email);

			return Ok(user);
		}

		private async Task Authenticate(string userName)
		{
			var claims = new List<Claim>
			{
				new Claim(ClaimsIdentity.DefaultNameClaimType, userName)
			};
			var id = new ClaimsIdentity(claims, "ApplicationCookie", ClaimsIdentity.DefaultNameClaimType, ClaimsIdentity.DefaultRoleClaimType);
			await HttpContext.SignInAsync(CookieAuthenticationDefaults.AuthenticationScheme, new ClaimsPrincipal(id));
		}

		public async Task<IActionResult> Logout()
		{
			await HttpContext.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme);
			return RedirectToAction("Login", "Account");
		}
	}
}
