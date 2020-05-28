namespace Diplom.WebApi.Contexts.Notifications.Controllers
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
