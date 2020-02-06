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
        AuthorizationClient authorizationClient = retrofit.create(AuthorizationClient.class);
        AccountClient accountClient = retrofit.create(AccountClient.class);

        LoginUserModel loginModel = new LoginUserModel("test@mail.ru", "q1q1q1");
        RegisterUserModel registerUserModel = new RegisterUserModel(
                "test@mail.ru",
                "q1q1q1",
                "q1q1q1");

        try {
            Response<UserModel> response = authorizationClient.register(registerUserModel).execute();
//            Response<UserModel> response = authorizationClient.login(loginModel).execute();
//            List<WeatherModel> weathers = authorizationClient.loadChanges().execute().body();
//            accountClient.index().execute().body();

            int a = 3;
        } catch (IOException e) {
        }
    }
}
