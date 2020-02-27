package com.example.diplom.api;

import retrofit2.Call;
import retrofit2.http.GET;

public interface AccountClient {
    @GET("/account")
    Call<UserModel> index();
}
