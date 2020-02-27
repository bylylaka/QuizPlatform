package com.example.diplom;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Context;
import android.content.Intent;
import android.os.AsyncTask;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ProgressBar;
import android.widget.TextView;
import android.widget.Toast;

import com.example.diplom.testRetrofit.AuthorizationClient;
import com.example.diplom.testRetrofit.LoginUserModel;
import com.example.diplom.testRetrofit.RetrofitBuilder;
import com.example.diplom.testRetrofit.WeatherModel;
import com.mobsandgeeks.saripaar.ValidationError;
import com.mobsandgeeks.saripaar.Validator;
import com.mobsandgeeks.saripaar.annotation.Email;
import com.mobsandgeeks.saripaar.annotation.NotEmpty;
import com.mobsandgeeks.saripaar.annotation.Password;

import java.util.List;

import retrofit2.Response;
import retrofit2.Retrofit;

import static java.net.HttpURLConnection.HTTP_OK;

public class LoginActivity extends AppCompatActivity {

    private Button buttonLogin;
    private Validator validator;
    private ProgressBar progressBar;
    private TextView errorLabel;

    @NotEmpty
    @Email
    private EditText editTextEmail;

    @NotEmpty
    @Password
    private EditText editTextPassword;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);

        initView();
        validator = new Validator(this);
        validator.setValidationListener(MyValidatorListenner);
    }

    private void initView() {
        editTextEmail = findViewById(R.id.editTextEmail);
        editTextPassword = findViewById(R.id.editTextPassword);
        buttonLogin = findViewById(R.id.buttonSave);
        progressBar = findViewById(R.id.progressBar);
        errorLabel = findViewById(R.id.errorLabel);

        buttonLogin.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                validator.validate();
            }
        });
    }

    private class LoginTask extends AsyncTask<LoginUserModel, Void, Boolean> {
        private Context context;

        LoginTask(Context context) {
            this.context = context;
        }

        @Override
        protected void onPreExecute() {
            super.onPreExecute();
            progressBar.setVisibility(View.VISIBLE);
        }

        @Override
        protected Boolean doInBackground(LoginUserModel... loginUserModels) {
            Retrofit retrofit = RetrofitBuilder.getInstance();
            AuthorizationClient authorizationClient = retrofit.create(AuthorizationClient.class);
            try {
                Response response = authorizationClient.login(loginUserModels[0]).execute();
                if (response.code() != HTTP_OK) {
                    return false;
                }
                List<WeatherModel> weathers = authorizationClient.loadChanges().execute().body();
            } catch (Exception e) {
            }
            return true;
        }

        @Override
        protected void onPostExecute(Boolean success) {
            super.onPostExecute(success);
            progressBar.setVisibility(View.GONE);

            if (success) {
                Intent intent = new Intent(context, MainActivity.class);
                startActivity(intent);
            } else {
                errorLabel.setVisibility(View.VISIBLE);
            }
        }
    }

    private Validator.ValidationListener MyValidatorListenner = new Validator.ValidationListener() {
        @Override
        public void onValidationSucceeded() {
            LoginUserModel loginModel = new LoginUserModel(
                    editTextEmail.getText().toString(),
                    editTextPassword.getText().toString());

            LoginTask loginTask = new LoginTask(getApplicationContext());
            loginTask.execute(loginModel);


//            Intent intent = new Intent(getApplicationContext(), BackgroundService.class);
//            startService(intent);


//            retrofit = RetrofitBuilder.build();
//            registerApi = retrofit.create(RegisterClient.class); //Создаем объект, при помощи которого будем выполнять запросы

//            RegisterUserModel registerModel = new RegisterUserModel("55555mixaaasfsfa", "55fs5", "55fs5");
//
//            registerApi.register(registerModel).enqueue(new Callback<UserModel>() {
//                @Override
//                public void onResponse(Call<UserModel> call, Response<UserModel> response) {
//                    if (response.errorBody() != null){
//                        throw new Error("fef");
//                    }
//                }
//
//                @Override
//                public void onFailure(Call<UserModel> call, Throwable t) {
//                    int a = 3;
//                }
//            });


//            try {
//                Call<UserModel> call = registerApi.login(loginModel);
//                call.
//
//                registerApi.login(loginModel).execute();
//
////                List<WeatherModel> list = registerApi.loadChanges().execute().body();
//                int b = 3;
//            } catch (Exception e) {
//                int c = 3;
//            }
//            registerApi.login(loginModel).enqueue(new Callback<UserModel>() {
//                @Override
//                public void onResponse(Call<UserModel> call, Response<UserModel> response) {
//                    if (response.errorBody() != null) {
//                        throw new Error("fef");
//                    }
//                }
//
//                @Override
//                public void onFailure(Call<UserModel> call, Throwable t) {
//                    int a = 3;
//                }
//            });

        }

        @Override
        public void onValidationFailed(List<ValidationError> errors) {
            for (ValidationError error : errors) {
                View view = error.getView();
                String message = error.getCollatedErrorMessage(getApplicationContext());

                if (view instanceof EditText) {
                    ((EditText) view).setError(message);
                } else {
                    Toast.makeText(getApplicationContext(), message, Toast.LENGTH_LONG).show();
                }
            }
        }
    };
}
