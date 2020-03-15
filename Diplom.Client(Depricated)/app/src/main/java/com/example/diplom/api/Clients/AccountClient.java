package com.example.diplom.api.Clients;

import com.example.diplom.api.Models.UserModel;

import retrofit2.Call;
import retrofit2.http.GET;

public interface AccountClient {
    @GET("/account")
    Call<UserModel> getProfile();
}
