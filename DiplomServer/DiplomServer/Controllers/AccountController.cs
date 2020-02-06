namespace DiplomServer.Controllers
{
    using DiplomServer.Infrastructure;
    using Microsoft.AspNetCore.Authorization;
    using Microsoft.AspNetCore.Mvc;
    using System.Linq;

    [Route("[controller]")]
	public class AccountController : Controller
	{
		private readonly ApplicationContext db;

		public AccountController(ApplicationContext context)
		{
			db = context;
		}

		[Authorize]
		[HttpGet]
		public IActionResult Index()
		{
			var email = User.Identity.Name;
			var user = db.Users.FirstOrDefault(user => user.Email == email);

			return Ok(user);
		}
	}
}
