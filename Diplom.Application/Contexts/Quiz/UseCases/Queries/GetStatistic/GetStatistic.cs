using Diplom.Application.Contexts.Core.Mediator;
using Diplom.Application.Contexts.Quiz.Models;

namespace Diplom.Application.Contexts.Quiz.UseCases.Queries.GetStatistic
{
    public class GetStatistic : IQuery<StatisticQuizViewModel>
    {
        public GetStatistic(int id)
        {
            Id = id;
        }

        public int Id { get; set; }
    }
}
