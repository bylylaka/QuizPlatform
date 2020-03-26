using Diplom.Domain.Team.Models;
using Microsoft.AspNetCore.Http;

namespace Diplom.WebApi.Models
{
	public class UserInputViewModel
	{
		public string Name { get; set; }

		public string Email { get; set; }

		public int Age { get; set; }

		public Gender Gender { get; set; }

		public IFormFile Avatar { get; set; }
	}
}
