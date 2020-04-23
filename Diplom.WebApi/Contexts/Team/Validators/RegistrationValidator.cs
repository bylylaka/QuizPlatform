namespace Diplom.WebApi.Contexts.Team.Validators
{
    using Diplom.WebApi.Contexts.Team.Models.Profile;
    using FluentValidation;
	using System.Text.RegularExpressions;

	public class RegistrationValidator : AbstractValidator<RegistrationModel>
	{
		public RegistrationValidator()
		{
			var numbersAndDigitsRegex = new Regex("^[a-zA-Z0-9]*$");

			RuleFor(r => r.Email)
				.EmailAddress();

			RuleFor(r => r.Password)
				.MinimumLength(6)
				.Matches("[a-z]")
				.Matches("[A-Z]")
				.Matches("[0-9]");

			RuleFor(r => r.Password)
				.Must(val => !numbersAndDigitsRegex.Match(val).Success)
				.WithMessage("Password should contain at least 1 special character(s)");

			RuleFor(r => r.ConfirmPassword)
				.Equal(r => r.Password);
		}
	}
}
