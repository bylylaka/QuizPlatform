namespace Diplom.Application.Contexts.Team.UseCases.Queries.SearchByWord
{
    using Diplom.Application.Contexts.Team.Models;
    using System.Collections.Generic;

    public class SearchByWordResult
    {
        public SearchByWordResult(List<UserSimplifiedViewModel> users)
        {
            Users = users;
        }

        public List<UserSimplifiedViewModel> Users { get; set; }
    }
}
