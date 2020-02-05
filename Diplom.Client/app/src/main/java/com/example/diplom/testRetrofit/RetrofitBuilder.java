package com.example.diplom.testRetrofit;

import java.net.CookieManager;
import java.net.CookiePolicy;

import okhttp3.OkHttpClient;
import okhttp3.internal.JavaNetCookieJar;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

public class RetrofitBuilder {
    private static Retrofit retrofit = null;

    public static Retrofit getInstance() {
        if (retrofit != null) {
            return retrofit;
        }

        CookieManager cookieManager = new CookieManager();
        cookieManager.setCookiePolicy(CookiePolicy.ACCEPT_ALL);
        OkHttpClient oktHttpClient = UnsafeOkHttpClient.getUnsafeOkHttpClient().newBuilder()
                .cookieJar(new JavaNetCookieJar(cookieManager))
                .build();

        retrofit = new Retrofit.Builder()
                .baseUrl("https://10.0.2.2:5001")
                .client(oktHttpClient)
                .addConverterFactory(GsonConverterFactory.create())
                .build();
        return retrofit;
    }
}
