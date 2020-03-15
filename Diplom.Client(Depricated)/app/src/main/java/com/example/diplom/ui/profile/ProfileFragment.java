package com.example.diplom.ui.profile;

import android.content.Context;
import android.content.SharedPreferences;
import android.os.AsyncTask;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import androidx.annotation.NonNull;
import androidx.fragment.app.Fragment;

import com.example.diplom.R;
import com.example.diplom.api.Clients.AccountClient;
import com.example.diplom.api.Models.LoginUserModel;
import com.example.diplom.api.RetrofitBuilder;

import retrofit2.Response;
import retrofit2.Retrofit;

import static java.net.HttpURLConnection.HTTP_OK;

public class ProfileFragment extends Fragment {

    public View onCreateView(@NonNull LayoutInflater inflater,
            ViewGroup container, Bundle savedInstanceState) {
        View root = inflater.inflate(R.layout.fragment_profile, container, false);
        GetProfileTask loginTask = new GetProfileTask();
        loginTask.execute();
        return root;
    }



    private class GetProfileTask extends AsyncTask<LoginUserModel, Void, Boolean> {
        @Override
        protected void onPreExecute() {
            super.onPreExecute();
        }

        @Override
        protected Boolean doInBackground(LoginUserModel... loginUserModels) {
            SharedPreferences sharedPreferences = getActivity().getPreferences(Context.MODE_PRIVATE);
            Retrofit retrofit = RetrofitBuilder.getInstance(sharedPreferences);
            AccountClient accountClient = retrofit.create(AccountClient.class);
            try {
                Response response = accountClient.getProfile().execute();
                if (response.code() != HTTP_OK) {
                    return false;
                }
            } catch (Exception e) {
                int a = 3;
            }
            return true;
        }

        @Override
        protected void onPostExecute(Boolean success) {
            super.onPostExecute(success);
        }
    }
}