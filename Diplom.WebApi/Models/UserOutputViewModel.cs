namespace Diplom.WebApi.Models
{
	using Diplom.Domain.Team.Models;

	public class UserOutputViewModel
	{
		public string Name { get; set; }

		public string Email { get; set; }

		public int Age { get; set; }

		public Gender Gender { get; set; }

		public string Avatar { get; set; }
	}
}
