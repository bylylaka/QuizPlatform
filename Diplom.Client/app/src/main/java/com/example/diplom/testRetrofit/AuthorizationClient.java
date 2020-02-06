package com.example.diplom.testRetrofit;

import java.util.List;

import retrofit2.Call;
import retrofit2.http.Body;
import retrofit2.http.GET;
import retrofit2.http.POST;

public interface AuthorizationClient {
    @POST("/authorization/register")
    Call<UserModel> register(@Body RegisterUserModel model);

    @POST("/authorization/login")
    Call<UserModel> login(@Body LoginUserModel model);

    @POST("/authorization/logout")
    Call<Void> logout();

    @GET("/teta")
    Call<List<WeatherModel>> loadChanges();
}
