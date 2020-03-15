package com.example.diplom.ui;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.AsyncTask;
import android.os.Bundle;

import com.example.diplom.R;
import com.example.diplom.api.Clients.AuthorizationClient;
import com.example.diplom.api.RetrofitBuilder;

import retrofit2.Response;
import retrofit2.Retrofit;

import static java.net.HttpURLConnection.HTTP_OK;

public class StartScreen extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_start_screen);
        ResolveInitialNavigationTask resolveInitialNavigationTask = new ResolveInitialNavigationTask();
        resolveInitialNavigationTask.execute();
    }

    private class ResolveInitialNavigationTask extends AsyncTask<Void, Void, Boolean> {
        @Override
        protected Boolean doInBackground(Void... voids) {
            SharedPreferences sharedPreferences = getPreferences(Context.MODE_PRIVATE);
            Retrofit retrofit = RetrofitBuilder.getInstance(sharedPreferences);
            AuthorizationClient authorizationClient = retrofit.create(AuthorizationClient.class);
            Intent intent = null;

            //TODO: good place to test what if server is not responding
            try {
                Response<Void> result = authorizationClient.checkAuthorized().execute();
                int resultCode = result.code();
                if (resultCode == HTTP_OK) {
                    intent = new Intent(getApplicationContext(), MainActivity.class);
                } else {
                    intent = new Intent(getApplicationContext(), SignUpActivity.class);
                }
            } catch (Exception e) {
            }

            startActivity(intent);
            return null;
        }

        @Override
        protected void onPostExecute(Boolean isAuthorized) {
            super.onPostExecute(isAuthorized);
        }
    }
}
