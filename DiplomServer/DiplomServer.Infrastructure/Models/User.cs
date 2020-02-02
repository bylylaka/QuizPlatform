namespace DiplomServer.Infrastructure.Models
{
	using System.ComponentModel.DataAnnotations.Schema;

	public class User
	{
		[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
		public int Id { get; set; }

		public string Email { get; set; }

		public string Password { get; set; }
	}
}
