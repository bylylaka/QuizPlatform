﻿namespace Diplom.Domain.Contexts.Team.Models
{
	using Microsoft.AspNetCore.Identity;

	public class Role : IdentityRole<int>
	{
		public Role(string name) : base(name)
		{
		}
	}
}
