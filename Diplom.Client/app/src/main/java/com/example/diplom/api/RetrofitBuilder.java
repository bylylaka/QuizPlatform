package com.example.diplom.api;

import android.content.SharedPreferences;

import com.franmontiel.persistentcookiejar.PersistentCookieJar;
import com.franmontiel.persistentcookiejar.cache.CookieCache;
import com.franmontiel.persistentcookiejar.cache.SetCookieCache;
import com.franmontiel.persistentcookiejar.persistence.SharedPrefsCookiePersistor;

import okhttp3.OkHttpClient;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;


public class RetrofitBuilder {
    private static Retrofit retrofit = null;

    public static Retrofit getInstance(SharedPreferences sharedPreferences) {
        if (retrofit != null) {
            return retrofit;
        }
        CookieCache cookieCache = new SetCookieCache();
        OkHttpClient oktHttpClient = UnsafeOkHttpClient.getUnsafeOkHttpClient().newBuilder()
                .cookieJar(new PersistentCookieJar(cookieCache, new SharedPrefsCookiePersistor(sharedPreferences)))
                .build();

        retrofit = new Retrofit.Builder()
                .baseUrl("https://10.0.2.2:5001")
                .client(oktHttpClient)
                .addConverterFactory(GsonConverterFactory.create())
                .build();
        return retrofit;
    }
}