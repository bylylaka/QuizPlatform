package com.example.diplom.testRetrofit;

import java.util.List;

import retrofit2.Call;
import retrofit2.http.GET;

public interface WeatherClient {
    @GET("/teta")
    Call<List<WeatherRepo>> loadChanges();
}
