package com.example.diplom.api;

import java.util.List;

import retrofit2.Call;
import retrofit2.http.Body;
import retrofit2.http.GET;
import retrofit2.http.POST;

public interface AuthorizationClient {
    @POST("/authorization/register")
    Call<Void> register(@Body RegisterUserModel model);

    @POST("/authorization/login")
    Call<Void> login(@Body LoginUserModel model);

    @GET("/authorization/isAuthorized")
    Call<Void> checkAuthorized();

    @POST("/authorization/logout")
    Call<Void> logout();

    @GET("/teta")
    Call<List<WeatherModel>> loadChanges();
}