using Diplom.Domain.Contexts.Notifications.Services;
using Diplom.Domain.Contexts.Quiz.Services;
using Diplom.Domain.Contexts.Team.Services;
using System;
using System.Threading.Tasks;

namespace Diplom.Domain.Contexts.Core.Repositories
{
    public interface IUnitOfWork : IDisposable
    {
        public IQuizRepository Quizes { get; }

        public IUserRepository Users { get; }

        public INotificationRepository Notifications { get; }

        public Task SaveAsync();
    }
}
