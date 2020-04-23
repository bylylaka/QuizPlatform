namespace Diplom.Application.Contexts.Quiz.UseCases.Queries.SearchByWord
{
    using Diplom.Application.Contexts.Core.Mediator;
    using System.Collections.Generic;

    public class SearchByWord : IQuery<List<SearchByWordResult>>
    {
        public SearchByWord(string word)
        {
            Word = word;
        }

        public string Word { get; set; }
    }
}
