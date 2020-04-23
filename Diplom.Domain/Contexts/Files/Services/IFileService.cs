namespace Diplom.Domain.Contexts.Files.Services
{
	using Microsoft.AspNetCore.Http;
	using System.Threading.Tasks;

	public interface IFileService
	{
		Task<string> SaveFile(IFormFile file);
	}
}
