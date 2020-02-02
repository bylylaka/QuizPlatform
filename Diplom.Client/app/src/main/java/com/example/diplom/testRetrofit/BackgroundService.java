package com.example.diplom.testRetrofit;

import android.app.IntentService;
import android.app.Service;
import android.content.Intent;
import android.os.IBinder;

import androidx.annotation.Nullable;

import java.io.IOException;
import java.util.List;

import retrofit2.Call;
import retrofit2.Retrofit;

public class BackgroundService extends IntentService {

    public BackgroundService() {
        super("BackgroundService");
    }

    @Override
    protected void onHandleIntent(@Nullable Intent intent) {
        Retrofit retrofit = ApiBuilder.build();
        RegisterClient registerApi = retrofit.create(RegisterClient.class); //Создаем объект, при помощи которого будем выполнять запросы

        LoginUserModel loginModel = new LoginUserModel("55555mixaaasfsfa", "55fs5");

        try {
            UserModel user = registerApi.login(loginModel).execute().body();
            List<WeatherRepo> weathers = registerApi.loadChanges().execute().body();
            int a = 3;
        } catch (IOException e) {
        }
    }
}
