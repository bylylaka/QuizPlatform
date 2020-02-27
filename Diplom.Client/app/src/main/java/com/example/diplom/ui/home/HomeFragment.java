package com.example.diplom.ui.home;

import android.content.Context;
import android.content.SharedPreferences;
import android.os.AsyncTask;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import androidx.annotation.Nullable;
import androidx.annotation.NonNull;
import androidx.fragment.app.Fragment;

import com.example.diplom.R;
import com.example.diplom.api.AuthorizationClient;
import com.example.diplom.api.LoginUserModel;
import com.example.diplom.api.RetrofitBuilder;
import com.mobsandgeeks.saripaar.ValidationError;
import com.mobsandgeeks.saripaar.Validator;
import com.mobsandgeeks.saripaar.annotation.NotEmpty;

import java.util.List;

import retrofit2.Response;
import retrofit2.Retrofit;

import static java.net.HttpURLConnection.HTTP_OK;

public class HomeFragment extends Fragment {

    private Button buttonSave;
    private Validator validator;

    @NotEmpty
//    @Email
    private EditText editTextEmail;

    @NotEmpty
//    @Password
    private EditText editTextPassword;

    public View onCreateView(@NonNull LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
        View root = inflater.inflate(R.layout.fragment_home, container, false);
        return root;
    }

    @Override
    public void onViewCreated(View view, @Nullable Bundle savedInstanceState) {
        initView();
        validator = new Validator(this);
        validator.setValidationListener(MyValidatorListenner);
    }

    private void initView() {
        View view = getView();
        editTextEmail = view.findViewById(R.id.editTextEmail);
        editTextPassword = view.findViewById(R.id.editTextPassword);
        buttonSave = view.findViewById(R.id.buttonSave);
        buttonSave.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                validator.validate();
            }
        });
    }

    private Validator.ValidationListener MyValidatorListenner = new Validator.ValidationListener() {
        @Override
        public void onValidationSucceeded() {
            LoginTask loginTask = new LoginTask();
            loginTask.execute();
        }

        @Override
        public void onValidationFailed(List<ValidationError> errors) {
            for (ValidationError error : errors) {
                View view = error.getView();
                String message = error.getCollatedErrorMessage(getActivity());

                if (view instanceof EditText) {
                    ((EditText) view).setError(message);
                } else {
                    Toast.makeText(getActivity(), message, Toast.LENGTH_LONG).show();
                }
            }
        }
    };

    private class LoginTask extends AsyncTask<LoginUserModel, Void, Boolean> {
        @Override
        protected void onPreExecute() {
            super.onPreExecute();
        }

        @Override
        protected Boolean doInBackground(LoginUserModel... loginUserModels) {
            SharedPreferences sharedPreferences = getActivity().getPreferences(Context.MODE_PRIVATE);
            Retrofit retrofit = RetrofitBuilder.getInstance(sharedPreferences);
            AuthorizationClient authorizationClient = retrofit.create(AuthorizationClient.class);
            try {
                Response response = authorizationClient.loadChanges().execute();
                if (response.code() != HTTP_OK) {
                    return false;
                }
                int a = 3;
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