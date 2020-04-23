namespace Diplom.Domain.Contexts.Files.Services
{
	using Microsoft.AspNetCore.Hosting;
	using Microsoft.AspNetCore.Http;
	using System;
	using System.IO;
	using System.Linq;
	using System.Threading.Tasks;

	public class FileService : IFileService
	{
		public IWebHostEnvironment _appEnvironment;

		public FileService(IWebHostEnvironment appEnvironment)
		{
			_appEnvironment = appEnvironment;
		}

		public async Task<string> SaveFile(IFormFile file)
		{
			var extension = file.FileName.Split('.').Last();
			var path = Path.Combine("uploads", $"{Guid.NewGuid()}.{extension}");

			using (var fileStream = new FileStream(Path.Combine(_appEnvironment.WebRootPath, path), FileMode.Create))
			{
				await file.CopyToAsync(fileStream);
			}

			return path;
		}
	}
}
