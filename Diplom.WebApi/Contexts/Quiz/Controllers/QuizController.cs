namespace Diplom.WebApi.Contexts.Quiz.Controllers
{
    using Diplom.Application.Contexts.Quiz.Models;
    using Diplom.Application.Contexts.Quiz.UseCases.Commands.AnswerQuiz;
    using Diplom.Application.Contexts.Quiz.UseCases.Commands.CreateQuiz;
    using Diplom.Application.Contexts.Quiz.UseCases.Queries.GetQuiz;
    using Diplom.Application.Contexts.Quiz.UseCases.Queries.GetStatistic;
    using Diplom.Application.Contexts.Quiz.UseCases.Queries.GetUserQuizList;
    using Diplom.Application.Contexts.Quiz.UseCases.Queries.SearchByWord;
    using MediatR;
    using Microsoft.AspNetCore.Authorization;
    using Microsoft.AspNetCore.Mvc;
    using System.Collections.Generic;
    using System.Threading.Tasks;

    [Route("api/[controller]")]
    public class QuizController : Controller
    {
        private readonly IMediator _mediator;

        public QuizController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [Authorize]
        [HttpGet]
        [Route("[action]/{id}")]
        public async Task<IActionResult> GetQuiz([FromRoute] int id)
        {
            var result = await _mediator.Send(new GetQuiz(id));

            return Ok(result);
        }

        [Authorize]
        [HttpGet]
        [Route("[action]/{id}")]
        public async Task<IActionResult> GetUserQuizList([FromRoute] int id)
        {
            var query = new GetUserQuizList(id);
            var result = await _mediator.Send(query);

            return Ok(result);
        }

        [Authorize]
        [HttpGet]
        [Route("[action]/{word}")]
        public async Task<IActionResult> SearchByWord([FromRoute] string word)
        {
            var query = new SearchByWord(word);
            var result = await _mediator.Send(query);

            return Ok(result);
        }

        [Authorize]
        [HttpPost]
        [Route("[action]")]
        public async Task<IActionResult> CreateQuiz([FromBody] CreateQuiz command)
        {
            command.Principal = User;
            await _mediator.Send(command);

            return Ok();
        }

        [Authorize]
        [HttpPost]
        [Route("[action]")]
        public async Task<IActionResult> AnswerQuiz([FromBody] List<AnswerViewModel> answerModels)
        {
            var command = new AnswerQuiz(User, answerModels);
            await _mediator.Send(command);

            return Ok();
        }

        [Authorize]
        [HttpGet]
        [Route("statistic/{id}")]
        public async Task<IActionResult> GetStatistic([FromRoute] int id)
        {
            var query = new GetStatistic(id);
            var result = await _mediator.Send(query);

            return Ok(result);
        }
    }
}
