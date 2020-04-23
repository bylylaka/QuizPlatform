namespace Diplom.WebApi.Contexts.Core.Middleware
{
    using Diplom.Domain.Contexts.Core.Exceptions;
    using Microsoft.AspNetCore.Http;
	using System;
	using System.Threading.Tasks;

	public class HttpStatusCodeExceptionMiddleware
	{
		private readonly RequestDelegate _next;

		public HttpStatusCodeExceptionMiddleware(RequestDelegate next)
		{
			_next = next ?? throw new ArgumentNullException(nameof(next));
		}

		public async Task Invoke(HttpContext context)
		{
			try
			{
				await _next(context);
			}
			catch (Exception e)
			{
				Exception appException;
				if (e is AbstractDomainException)
				{
					appException = e;
				}
				else if (e?.InnerException is AbstractDomainException)
				{
					appException = e.InnerException;
				}
				else
				{
					throw e;
				}

				int statusCode;

				switch (appException)
				{
					case EntityDoesNotExistException exception:
						{
							statusCode = 404;
							break;
						}

					case BadRequestException exception:
						{
							statusCode = 400;
							break;
						}

					default:
						{
							statusCode = 500;
							break;
						}
				}

				context.Response.Clear();
				context.Response.StatusCode = statusCode;
				context.Response.ContentType = "application/json";
				await context.Response.WriteAsync("Error");
			}
		}
	}
}
