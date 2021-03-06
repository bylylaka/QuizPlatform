﻿namespace Diplom.Domain.Contexts.Quiz.Models
{
	using System.Collections.Generic;

	public class Question
	{
		public int Id { get; set; }

		public string Title { get; set; }

		public QuestionType Type { get; set; }

		public int QuizId { get; set; }

		public List<Option> Options { get; set; }
	}
}
