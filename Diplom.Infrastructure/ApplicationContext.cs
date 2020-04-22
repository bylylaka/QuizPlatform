namespace Diplom.Infrastructure
{
	using Diplom.Domain.Quiz.Models;
	using Diplom.Domain.Team.Models;
	using Microsoft.AspNetCore.Identity;
	using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
	using Microsoft.EntityFrameworkCore;
	using Newtonsoft.Json;
	using Newtonsoft.Json.Linq;

	public class ApplicationContext : IdentityDbContext<User, Role, int, IdentityUserClaim<int>, IdentityUserRole<int>,
		IdentityUserLogin<int>, IdentityRoleClaim<int>, IdentityUserToken<int>>
	{
		public ApplicationContext(DbContextOptions options) : base(options)
		{
			Database.EnsureCreated();
		}

		public DbSet<Quiz> Quiz { get; set; }

		public DbSet<Question> Questions { get; set; }

		public DbSet<Option> Options { get; set; }

		public DbSet<Answer> Answers { get; set; }

		protected override void OnModelCreating(ModelBuilder modelBuilder)
		{
			base.OnModelCreating(modelBuilder);

			modelBuilder.Entity<User>()
				.Property(u => u.LoveAnimals)
				.HasDefaultValue(false);

			modelBuilder.Entity<User>()
				.Property(u => u.Smoke)
				.HasDefaultValue(false);

			modelBuilder.Entity<User>()
				.Property(u => u.Drink)
				.HasDefaultValue(false);

			modelBuilder.Entity<User>()
				.Property(u => u.Work)
				.HasDefaultValue(false);

			modelBuilder.Entity<User>()
				.Property(u => u.Study)
				.HasDefaultValue(false);

			modelBuilder.Entity<Quiz>()
				.HasMany(x => x.Questions)
				.WithOne()
				.HasForeignKey(x => x.QuizId)
				.OnDelete(DeleteBehavior.Cascade);

			modelBuilder.Entity<Quiz>()
				.HasOne(q => q.User)
				.WithMany(u => u.Quizes)
				.HasForeignKey(x => x.UserId)
				.OnDelete(DeleteBehavior.Cascade);

			modelBuilder.Entity<Question>()
				.HasMany(q => q.Options)
				.WithOne()
				.HasForeignKey(x => x.QuistionId)
				.OnDelete(DeleteBehavior.Cascade);

			modelBuilder.Entity<Answer>()
				.HasOne<Question>()
				.WithMany()
				.HasForeignKey(x => x.QuestionId)
				.OnDelete(DeleteBehavior.Cascade);

			modelBuilder.Entity<Answer>()
				.HasOne(a => a.User)
				.WithMany(u => u.Answers)
				.HasForeignKey(x => x.UserId)
				.OnDelete(DeleteBehavior.Cascade);

			modelBuilder.Entity<Answer>()
				.HasOne<Quiz>()
				.WithMany()
				.HasForeignKey(x => x.QuizId)
				.OnDelete(DeleteBehavior.Cascade);

			modelBuilder.Entity<Answer>()
				.Property(a => a.Value)
				.HasConversion(
					v => JsonConvert.SerializeObject(v),
					v => JsonConvert.DeserializeObject(v));
		}
	}
}
