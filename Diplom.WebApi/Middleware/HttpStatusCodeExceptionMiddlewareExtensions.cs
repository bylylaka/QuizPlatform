namespace Diplom.Server.WebApi.Middleware
{
	using Microsoft.AspNetCore.Builder;

	public static class HttpStatusCodeExceptionMiddlewareExtensions
	{
		public static IApplicationBuilder UseHttpStatusCodeExceptionMiddleware(this IApplicationBuilder builder)
		{
			return builder.UseMiddleware<HttpStatusCodeExceptionMiddleware>();
		}
	}
}
