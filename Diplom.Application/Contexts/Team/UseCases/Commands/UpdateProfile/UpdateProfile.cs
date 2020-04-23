namespace Diplom.Application.Contexts.Team.UseCases.Commands.UpdateProfile
{
    using Diplom.Application.Contexts.Core.Mediator;
    using Diplom.Application.Contexts.Team.Models;
    using Diplom.Domain.Contexts.Team.Models;
    using Microsoft.AspNetCore.Http;
    using System;
    using System.Security.Claims;

    public class UpdateProfile : ICommand<UserOutputViewModel>
    {
        public ClaimsPrincipal Principal { get; set; }

        public int Id { get; set; }

        public string Name { get; set; }

        public string Email { get; set; }

        public Gender Gender { get; set; }

        public IFormFile Avatar { get; set; }

        public DateTime? Birth { get; set; }

        public Education? Education { get; set; }

        public int? Country { get; set; }

        public int? City { get; set; }

        public MaritalStatus? MaritalStatus { get; set; }

        public bool LoveAnimals { get; set; }

        public bool Smoke { get; set; }

        public bool Drink { get; set; }

        public int? ChildsCount { get; set; }

        public bool Work { get; set; }

        public bool Study { get; set; }

        public int? Salary { get; set; }
    }
}
