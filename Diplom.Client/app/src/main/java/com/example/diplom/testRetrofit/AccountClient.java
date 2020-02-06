package com.example.diplom.testRetrofit;

import retrofit2.Call;
import retrofit2.http.GET;

public interface AccountClient {
    @GET("/account")
    Call<UserModel> index();
}
