namespace Diplom.Application.Contexts.Team.UseCases.Queries.SearchByWord
{
    using Diplom.Application.Contexts.Core.Mediator;

    public class SearchByWord : IQuery<SearchByWordResult>
    {
        public SearchByWord(string word)
        {
            Word = word;
        }

        public string Word { get; set; }
    }
}
