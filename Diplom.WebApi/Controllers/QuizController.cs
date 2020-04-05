namespace Diplom.WebApi.Controllers
{
	using AutoMapper;
    using Diplom.Domain.Files.Services;
    using Diplom.Domain.Quiz.Models;
	using Diplom.Domain.Quiz.Services;
	using Diplom.WebApi.Models.Quiz;
	using Microsoft.AspNetCore.Authorization;
    using Microsoft.AspNetCore.Http;
    using Microsoft.AspNetCore.Mvc;
	using Newtonsoft.Json;
	using Newtonsoft.Json.Linq;
	using System;
	using System.Collections.Generic;
	using System.Linq;
	using System.Threading.Tasks;

	[Route("api/[controller]")]
	public class QuizController : Controller
	{
		private readonly IMapper _mapper;

		private readonly IQuizService _quizService;

		private readonly IFileService _fileService;

		public QuizController(
			IMapper mapper,
			IQuizService quizService,
			IFileService fileService)
		{
			_mapper = mapper;
			_quizService = quizService;
			_fileService = fileService;
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
		[HttpPost]
		[Route("[action]")]
		public async Task<IActionResult> CreateQuiz([FromBody] QuizViewModel quizModel)
		{
			var quiz = _mapper.Map<Quiz>(quizModel);

			await _quizService.AddQuiz(quiz);

			return Ok();
		}

		[Authorize]
		[HttpPost]
		[Route("[action]")]
		public async Task<IActionResult> Answer([FromBody] List<AnswerViewModel> answerModels)
		{
			var questionsIds = answerModels
				.Select(answer => answer.QuestionId)
				.ToList();

			var questions = await _quizService.GetQuestionsByIdList(questionsIds);

			var answers = answerModels
				.Select(am => _mapper.Map<Answer>(am))
				.ToList();

			foreach (var question in questions)
			{
				var answer = answers.First(a => a.QuestionId == question.Id);

				switch (question.Type)
				{
					case QuestionType.Text:
						break;
					case QuestionType.Checkbox:
						break;
					case QuestionType.File:
						try
						{
							var path = await _fileService.SaveFile((IFormFile)answer.Value);
						}
						catch (Exception e)
						{
							throw e;
						}
						break;
					case QuestionType.Date:
						answer.Value = DateTime.Parse((string) answer.Value);
						break;
					case QuestionType.Select:
						break;
				}
			}
			

			//var dt = DateTime.Parse("1111-11-11");
			//var a = new JObject(answerModels[0].Value);

			//var a1 = answerModels[0].Value;



			await _quizService.AddAnswers(answers);

			return Ok();
		}
	}
}
