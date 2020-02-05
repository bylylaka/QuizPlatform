package com.example.diplom.testRetrofit;

import android.app.IntentService;
import android.content.Intent;

import androidx.annotation.Nullable;

import java.io.IOException;
import java.util.List;

import retrofit2.Response;
import retrofit2.Retrofit;

public class BackgroundService extends IntentService {

    public BackgroundService() {
        super("BackgroundService");
    }

    @Override
    protected void onHandleIntent(@Nullable Intent intent) {
        Retrofit retrofit = RetrofitBuilder.getInstance();
        RegisterClient registerClient = retrofit.create(RegisterClient.class);

        LoginUserModel loginModel = new LoginUserModel("55555mixaaasfsfa", "55fs5");

        try {
            Response<UserModel> response = registerClient.login(loginModel).execute();
            List<WeatherModel> weathers = registerClient.loadChanges().execute().body();
            int a = 3;
        } catch (IOException e) {
        }
    }
}
