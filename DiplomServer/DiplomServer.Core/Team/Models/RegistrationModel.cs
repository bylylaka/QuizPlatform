namespace DiplomServer.Domain.Team.Models
{
	using System.ComponentModel.DataAnnotations;

	public class RegistrationModel
	{
		//TODO: check if unique
		[Required(ErrorMessage = "Не указан Email")]
		public string Email { get; set; }

		[Required(ErrorMessage = "Не указан пароль")]
		[DataType(DataType.Password)]
		public string Password { get; set; }

		[DataType(DataType.Password)]
		[Compare("Password", ErrorMessage = "Пароль введен неверно")]
		public string ConfirmPassword { get; set; }
	}
}
