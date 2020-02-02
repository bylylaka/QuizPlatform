namespace DiplomServer.Infrastructure
{
	using DiplomServer.Infrastructure.Models;
	using System.Linq;

	public static class DbInitializer
	{
		public static void Initialize(ApplicationContext context)
		{
			context.Database.EnsureCreated();

			if (context.Users.Any())
			{
				return;
			}

			var users = new User[]
			{
				new User{
					Email="test@email.ru",
					Password="321321"
				}
			};
			foreach (var s in users)
			{
				context.Users.Add(s);
			}
			context.SaveChanges();
		}
	}
}
