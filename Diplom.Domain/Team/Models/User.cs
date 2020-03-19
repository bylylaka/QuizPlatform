namespace Diplom.Domain.Team.Models
{
	using Microsoft.AspNetCore.Identity;

	public class User : IdentityUser<int>
	{
		public int Age { get; set; }

		public Gender Gender { get; set; }

		public string Avatar { get; set; }
	}
}
