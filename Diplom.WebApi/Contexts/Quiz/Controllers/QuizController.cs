namespace Diplom.WebApi.Contexts.Quiz.Controllers
{
	using AutoMapper;
	using Diplom.Domain.Contexts.Team.Models;
	using Microsoft.AspNetCore.Authorization;
	using Microsoft.AspNetCore.Identity;
	using Microsoft.AspNetCore.Mvc;
	using System.Collections.Generic;
	using System.Linq;
	using System.Threading.Tasks;
    using Diplom.Domain.Contexts.Quiz.Models;
    using Diplom.WebApi.Contexts.Quiz.Models;
    using Diplom.Domain.Contexts.Quiz.Services;

    [Route("api/[controller]")]
	public class QuizController : Controller
	{
		private readonly IMapper _mapper;

		private readonly UserManager<User> _userManager;

		private readonly IQuizService _quizService;

		public QuizController(
			IMapper mapper,
			UserManager<User> userManager,
			IQuizService quizService)
		{
			_mapper = mapper;
			_userManager = userManager;
			_quizService = quizService;
		}

		[Authorize]
		[HttpGet]
		[Route("[action]/{id}")]
		public async Task<IActionResult> GetQuiz([FromRoute] int id)
		{
			var quiz = await _quizService.GetQuizById(id);

			var quizModel = _mapper.Map<QuizViewModel>(quiz);

			return Ok(quizModel);
		}

		[Authorize]
		[HttpGet]
		[Route("[action]/{id}")]
		public async Task<IActionResult> GetUserQuizList([FromRoute] int id)
		{
			var quizList = await _quizService.GetUserQuizList(id);

			var quizListModel = quizList.Select(q => _mapper.Map<QuizViewModel>(q));

			return Ok(quizListModel);
		}

		[Authorize]
		[HttpGet]
		[Route("[action]/{searchWord}")]
		public async Task<IActionResult> SearchByWord([FromRoute] string searchWord)
		{
			var quizes = await _quizService.GetQuizesBySearchWord(searchWord);

			var quizesModels = quizes.Select(quiz => _mapper.Map<QuizSearchViewModel>(quiz));

			return Ok(quizesModels);
		}

		[Authorize]
		[HttpPost]
		[Route("[action]")]
		public async Task<IActionResult> CreateQuiz([FromBody] QuizViewModel quizModel)
		{
			var user = await _userManager.GetUserAsync(User);

			var quiz = _mapper.Map<Quiz>(quizModel);
			quiz.UserId = user.Id;

			await _quizService.AddQuiz(quiz);

			return Ok();
		}

		[Authorize]
		[HttpPost]
		[Route("[action]")]
		public async Task<IActionResult> Answer([FromBody] List<AnswerViewModel> answerModels)
		{
			var user = await _userManager.GetUserAsync(User);
			var answers = answerModels
				.Select(am => _mapper.Map<Answer>(am))
				.ToList();
			answers.ForEach(a => a.UserId = user.Id);

			await _quizService.AddAnswers(answers);

			return Ok();
		}

		[Authorize]
		[HttpGet]
		[Route("statistic/{id}")]
		public async Task<IActionResult> GetStatistic([FromRoute] int id)
		{
			var quiz = await _quizService.GetQuizById(id);
			var quizAnswers = await _quizService.GetQuizAnswers(id);
			var quizOptions = await _quizService.GetQuizOptions(id);

			var quizStatistic = new StatisticQuizViewModel()
			{
				Title = quiz.Title,
				Questions = quiz.Questions.Select(q =>
				{
					var questionAnswers = quizAnswers.Where(a => a.QuestionId == q.Id);

					return new StatisticQuestionViewModel()
					{
						Title = q.Title,
						Type = q.Type,
						Answers = questionAnswers.Select(a => _mapper.Map<StatisticAnswerViewModel>(a))
						.ToList(),
						Options = quizOptions.Select(o => _mapper.Map<OptionViewModel>(o))
						.ToList()
					};
				})
				.ToList()
			};

			return Ok(quizStatistic);
		}
	}
}
