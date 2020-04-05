﻿namespace Diplom.Domain.Quiz.Models
{
	using System.Collections.Generic;

	public class QuestionViewModel
	{
		public int Id { get; set; }
	
		public string Title { get; set; }

		public QuestionType Type { get; set; }

		public List<OptionViewModel> Options { get; set; }
	}
}