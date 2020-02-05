package com.example.diplom.testRetrofit;

import java.util.List;

import retrofit2.Call;
import retrofit2.http.Body;
import retrofit2.http.GET;
import retrofit2.http.Header;
import retrofit2.http.POST;

public interface RegisterClient {
    @POST("/account/register")
    Call<UserModel> register(@Body RegisterUserModel model);

    @POST("/account/login")
    Call<UserModel> login(@Body LoginUserModel model);

    @GET("/teta")
    Call<List<WeatherRepo>> loadChanges(@Header("Cookie") String cookie);
}
