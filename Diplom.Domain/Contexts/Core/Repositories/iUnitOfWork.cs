using Diplom.Domain.Contexts.Quiz.Services;
using Diplom.Domain.Contexts.Team.Services;
using System;

namespace Diplom.Domain.Contexts.Core.Repositories
{
    public interface IUnitOfWork : IDisposable
    {
        public IQuizRepository Quizes { get; }

        public IUserRepository Users { get; }

        public void Save();
    }
}
