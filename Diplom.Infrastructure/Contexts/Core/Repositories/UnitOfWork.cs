using Diplom.Domain.Contexts.Core.Repositories;
using Diplom.Domain.Contexts.Quiz.Services;
using Diplom.Domain.Contexts.Team.Services;
using Diplom.Infrastructure.Contexts.Team.Repositories;
using System;

namespace Diplom.Infrastructure.Contexts.Core.Repositories
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly ApplicationContext _appContext;

        public UnitOfWork(
            ApplicationContext appContext,
            IQuizRepository quizRepository,
            IUserRepository userRepository)
        {
            _appContext = appContext;
            Quizes = quizRepository;
            Users = userRepository;
        }

        public IQuizRepository Quizes { get; }

        public IUserRepository Users { get; }

        public void Save()
        {
            _appContext.SaveChanges();
        }

        private bool disposed = false;

        public virtual void Dispose(bool disposing)
        {
            if (!this.disposed)
            {
                if (disposing)
                {
                    _appContext.Dispose();
                }
                this.disposed = true;
            }
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
    }
}