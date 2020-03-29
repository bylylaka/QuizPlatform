namespace Diplom.WebApi.Models.User
{
	using Diplom.Domain.Team.Models;
	using System;

	public class UserOutputViewModel
	{
		public int Id { get; set; }

		public string Name { get; set; }

		public string Email { get; set; }

		public int Age { get; set; }

		public Gender Gender { get; set; }

		public string Avatar { get; set; }

		public DateTime? Birth { get; set; }

		public Education? Education { get; set; }

		public int? Country { get; set; }

		public int? City { get; set; }

		public MaritalStatus? MaritalStatus { get; set; }

		public bool? LoveAnimals { get; set; }

		public bool? Smoke { get; set; }

		public bool? Drink { get; set; }

		public int? ChildsCount { get; set; }

		public bool? Work { get; set; }

		public bool? Study { get; set; }

		public int? Salary { get; set; }
	}
}
