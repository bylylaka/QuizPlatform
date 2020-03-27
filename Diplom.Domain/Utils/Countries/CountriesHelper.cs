namespace Diplom.Domain.utils.Countries
{
	using Diplom.Domain.Utils.Countries;
	using Microsoft.AspNetCore.Hosting;
	using Newtonsoft.Json.Linq;
	using System.Collections.Generic;
	using System.IO;
	using System.Linq;

	public class CountriesHelper
	{
		private readonly IWebHostEnvironment _appEnvironment;

		public CountriesHelper(IWebHostEnvironment appEnvirinment)
		{
			_appEnvironment = appEnvirinment;
		}

		public List<Country> GetCountries()
		{
			var fileText = File.ReadAllText(Path.Combine(_appEnvironment.WebRootPath, "json", "countries.min.json"));
			var json = JObject.Parse(fileText);

			var countries = json.Children().Select(country => new Country()
			{
				Name = country.Path.ToString(),
				Cities = country.Children().Select(city => city.ToString()).ToList()
			}).ToList();

			return countries;
		}
	}
}
