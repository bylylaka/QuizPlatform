package com.example.diplom.testRetrofit;

import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

public class ApiBuilder {
    public static Retrofit build(){
        return new Retrofit.Builder()
                .baseUrl("https://10.0.2.2:5001") //Базовая часть адреса
                .client(UnsafeOkHttpClient.getUnsafeOkHttpClient())
                .addConverterFactory(GsonConverterFactory.create()) //Конвертер, необходимый для преобразования JSON'а в объекты
                .build();
    }
}
