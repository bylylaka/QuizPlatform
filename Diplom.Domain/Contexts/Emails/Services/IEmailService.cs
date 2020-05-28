namespace Diplom.Domain.Contexts.Emails.Services
{
	using System.Net.Mail;
	using System.Threading.Tasks;

	public interface IEmailService
	{
		Task SendEmailAsync(MailMessage message);
	}
}
