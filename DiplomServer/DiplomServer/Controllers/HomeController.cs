using System.Collections.Generic;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace DiplomServer.Controllers
{
	public class HomeController : Controller
	{
		private readonly ILogger<HomeController> _logger;

		public HomeController(ILogger<HomeController> logger)
		{
			_logger = logger;
		}

		[Route("teta")]
		[Authorize]
		[HttpGet]
		public List<Mam> Test()
		{
			var a = new List<Mam>()
			{
				new Mam()
				{
					Name = "fefefe"
				}
			};
			return a;
		}

		public class Mam
		{
			public string Name { get; set; }
		}
	}
}
