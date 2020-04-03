namespace Diplom.WebApi.Controllers
{
	using Diplom.Domain.Quiz.Models;
	using Microsoft.AspNetCore.Authorization;
	using Microsoft.AspNetCore.Mvc;

	[Route("api/[controller]")]
	public class QuizController : Controller
	{
		[Authorize]
		[HttpPost]
		public void CreateQuiz([FromBody] QuizViewModel quiz)
		{
			int a = 3;
		}
	}
}
