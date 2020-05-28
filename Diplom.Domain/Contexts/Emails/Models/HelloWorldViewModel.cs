namespace Diplom.Domain.Contexts.Emails.Models
{
	public class HelloWorldViewModel
	{
		public string ButtonLink { get; set; }

		public HelloWorldViewModel(string buttonLink)
		{
			ButtonLink = buttonLink;
		}
	}
}
