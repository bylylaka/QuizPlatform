namespace Diplom.Infrastructure.Contexts.Emails.Services
{
	using Diplom.Domain.Contexts.Emails.Services;
	using System.Net;
	using System.Net.Mail;
	using System.Threading.Tasks;

	public class EmailService : IEmailService
	{
		public async Task SendEmailAsync(MailMessage message)
		{
			using (var client = new SmtpClient("smtp.gmail.com"))
			{
				client.EnableSsl = true;
				client.Credentials = new NetworkCredential("maxim.arslanov.1998@gmail.com", "Zampsa1998");
				await client.SendMailAsync(message);
			}
		}
	}
}
