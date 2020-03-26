namespace Diplom.Controllers
{
	using AutoMapper;
	using Diplom.Domain.Files.Services;
	using Diplom.Domain.Team.Models;
	using Diplom.WebApi.Models;
	using Microsoft.AspNetCore.Authorization;
	using Microsoft.AspNetCore.Identity;
	using Microsoft.AspNetCore.Mvc;
	using System.Threading.Tasks;

	[Route("api/[controller]")]
	public class AccountController : Controller
	{
		private readonly IMapper _mapper;
		private readonly UserManager<User> _userManager;
		private readonly IFileService _fileService;

		public AccountController(
			IMapper mapper,
			UserManager<User> userManager,
			IFileService fileService)
		{
			_mapper = mapper;
			_userManager = userManager;
			_fileService = fileService;
		}

		[Authorize]
		[HttpGet]
		[Route("[action]")]
		public async Task<IActionResult> GetProfile()
		{
			var currentProfile = await _userManager.GetUserAsync(User);
			var result = _mapper.Map<UserOutputViewModel>(currentProfile);

			return Ok(result);
		}

		[Authorize]
		[HttpPut]
		[Route("[action]")]
		public async Task<IActionResult> UpdateProfile([FromForm] UserInputViewModel profile)
		{
			var currentProfile = await _userManager.GetUserAsync(User);
			var filePath = currentProfile.Avatar;

			if (profile.Avatar != null)
			{
				filePath = await _fileService.SaveFile(profile.Avatar);
			}

			currentProfile.Email = profile.Email;
			currentProfile.UserName = profile.Name;
			currentProfile.Age = profile.Age;
			currentProfile.Gender = profile.Gender;
			currentProfile.Avatar = filePath;

			await _userManager.UpdateAsync(currentProfile);

			var result = _mapper.Map<UserOutputViewModel>(currentProfile);

			return Ok(result);
		}
	}
}
