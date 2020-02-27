﻿namespace DiplomServer.Core.Team.Models
{
	using System.ComponentModel.DataAnnotations;

	public class LoginModel
	{
		[Required(ErrorMessage = "Не указан Email")]
		public string Email { get; set; }

		[Required(ErrorMessage = "Не указан пароль")]
		[DataType(DataType.Password)]
		public string Password { get; set; }
	}
}