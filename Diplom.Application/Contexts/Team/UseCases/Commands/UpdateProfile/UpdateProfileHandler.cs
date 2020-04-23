namespace Diplom.Application.Contexts.Team.UseCases.Commands.UpdateProfile
{
    using AutoMapper;
    using Diplom.Application.Contexts.Core.Mediator;
    using Diplom.Application.Contexts.Team.Models;
    using Diplom.Domain.Contexts.Core.Exceptions;
    using Diplom.Domain.Contexts.Files.Services;
    using Diplom.Domain.Contexts.Team.Models;
    using Microsoft.AspNetCore.Identity;
    using System.Threading;
    using System.Threading.Tasks;

    public class UpdateProfileHandler : ICommandHandler<UpdateProfile, UserOutputViewModel>
    {
        private readonly IMapper _mapper;

        private readonly UserManager<User> _userManager;

        private readonly IFileService _fileService;

        public UpdateProfileHandler(
            IMapper mapper,
            UserManager<User> userManager,
            IFileService fileService)
        {
            _mapper = mapper;
            _userManager = userManager;
            _fileService = fileService;
        }

        public async Task<UserOutputViewModel> Handle(UpdateProfile request, CancellationToken cancellationToken)
        {
            var currentProfile = await _userManager.GetUserAsync(request.Principal);
            var filePath = currentProfile.Avatar;

            if (request.Avatar != null)
            {
                filePath = await _fileService.SaveFile(request.Avatar);
            }

            currentProfile.Email = request.Email;
            currentProfile.UserName = request.Name;
            currentProfile.Gender = request.Gender;
            currentProfile.Avatar = filePath;
            currentProfile.ChildsCount = request.ChildsCount;
            currentProfile.City = request.City;
            currentProfile.Country = request.Country;
            currentProfile.Drink = request.Drink;
            currentProfile.Education = request.Education;
            currentProfile.LoveAnimals = request.LoveAnimals;
            currentProfile.MaritalStatus = request.MaritalStatus;
            currentProfile.Salary = request.Salary;
            currentProfile.Study = request.Study;
            currentProfile.Work = request.Work;
            currentProfile.Birth = request.Birth;

            var updateResult = await _userManager.UpdateAsync(currentProfile);
            if (!updateResult.Succeeded)
            {
                throw new BadRequestException();
            }

            var result = _mapper.Map<UserOutputViewModel>(currentProfile);

            return result;
        }
    }
}
