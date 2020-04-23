namespace Diplom.Domain.Contexts.Quiz.Models
{
	public class Option
	{
		public int Id { get; set; }

		public string Title { get; set; }

		public int QuistionId { get; set; }
	}
}
