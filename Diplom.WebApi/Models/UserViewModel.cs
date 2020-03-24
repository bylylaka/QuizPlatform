using Diplom.Domain.Team.Models;

namespace Diplom.WebApi.Models
{
	public class UserViewModel
	{
		public string Name { get; set; }

		public string Email { get; set; }

		public int Age { get; set; }

		public Gender Gender { get; set; }

		public string Avatar { get; set; }
	}
}
