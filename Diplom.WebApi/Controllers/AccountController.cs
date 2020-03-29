namespace Diplom.Controllers
{
	using AutoMapper;
	using Diplom.Domain.Exceptions;
	using Diplom.Domain.Files.Services;
	using Diplom.Domain.Team.Models;
	using Diplom.Domain.Team.Services;
	using Diplom.WebApi.Models.Profile;
	using Diplom.WebApi.Models.User;
	using Microsoft.AspNetCore.Authorization;
	using Microsoft.AspNetCore.Identity;
	using Microsoft.AspNetCore.Mvc;
    using System.Linq;
    using System.Threading.Tasks;

	[Route("api/[controller]")]
	public class AccountController : Controller
	{
		private readonly IMapper _mapper;

		private readonly UserManager<User> _userManager;

		private readonly IUserService _userService;

		private readonly IFileService _fileService;

		public AccountController(
			IMapper mapper,
			UserManager<User> userManager,
			IFileService fileService,
			IUserService userService)
		{
			_mapper = mapper;
			_userManager = userManager;
			_fileService = fileService;
			_userService = userService;
		}

		[Authorize]
		[HttpGet]
		[Route("[action]/{id}")]
		public async Task<IActionResult> GetUser([FromRoute] int id)
		{
			var user = await _userService.FindUserById(id);
			if (user == null)
			{
				throw new BadRequestException();
			}
			var result = _mapper.Map<UserOutputViewModel>(user);

			return Ok(result);
		}

		[Authorize]
		[HttpGet]
		[Route("[action]")]
		public async Task<IActionResult> GetMyProfileSimplified()
		{
			var currentProfile = await _userManager.GetUserAsync(User);
			var result = _mapper.Map<ProfileSimplifiedViewModel>(currentProfile);

			return Ok(result);
		}

		[Authorize]
		[HttpGet]
		[Route("[action]/{searchWord}")]
		public async Task<IActionResult> SearchByWord([FromRoute] string searchWord)
		{
			var users = await _userService.GetUsersBySearchWord(searchWord);
			var usersSimplified = users.Select(u => _mapper.Map<UserSimplifiedViewModel>(u));

			return Ok(usersSimplified);
		}

		[Authorize]
		[HttpPut]
		[Route("[action]")]
		public async Task<IActionResult> UpdateProfile(
			[FromForm] UserInputViewModel profile)
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
			currentProfile.ChildsCount = profile.ChildsCount;
			currentProfile.City = profile.City;
			currentProfile.Country = profile.Country;
			currentProfile.Drink = profile.Drink;
			currentProfile.Education = profile.Education;
			currentProfile.LoveAnimals = profile.LoveAnimals;
			currentProfile.MaritalStatus = profile.MaritalStatus;
			currentProfile.Salary = profile.Salary;
			currentProfile.Study = profile.Study;
			currentProfile.Work = profile.Work;
			currentProfile.Birth = profile.Birth;

			var updateResult = await _userManager.UpdateAsync(currentProfile);
			if (!updateResult.Succeeded)
			{
				throw new BadRequestException();
			}

			var result = _mapper.Map<UserOutputViewModel>(currentProfile);

			return Ok(result);
		}
	}
}
