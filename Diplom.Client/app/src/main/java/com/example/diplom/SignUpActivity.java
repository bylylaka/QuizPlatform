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
import com.example.diplom.testRetrofit.RegisterUserModel;
import com.example.diplom.testRetrofit.RetrofitBuilder;
import com.example.diplom.testRetrofit.WeatherModel;
import com.mobsandgeeks.saripaar.ValidationError;
import com.mobsandgeeks.saripaar.Validator;
import com.mobsandgeeks.saripaar.annotation.ConfirmPassword;
import com.mobsandgeeks.saripaar.annotation.Email;
import com.mobsandgeeks.saripaar.annotation.NotEmpty;
import com.mobsandgeeks.saripaar.annotation.Password;

import java.util.List;

import retrofit2.Response;
import retrofit2.Retrofit;

import static java.net.HttpURLConnection.HTTP_OK;

public class SignUpActivity extends AppCompatActivity {

    private Button buttonSignup;
    private Validator validator;
    private ProgressBar progressBar;
    private TextView errorLabel;

    @NotEmpty
    @Email
    private EditText editTextEmail;

//    @NotEmpty
//    @Password//(min = 6, scheme = Password.Scheme.ALPHA_NUMERIC_MIXED_CASE_SYMBOLS)
    private EditText editTextPassword;

    @NotEmpty
//    @ConfirmPassword
    private EditText editTextConfirmPassword;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_sign_up);

        initView();
        validator = new Validator(this);
        validator.setValidationListener(MyValidatorListenner);
    }

    private void initView() {
        editTextEmail = findViewById(R.id.editTextEmail);
        editTextPassword = findViewById(R.id.editTextPassword);
        editTextConfirmPassword = findViewById(R.id.editTextConfirmPassword);
        buttonSignup = findViewById(R.id.buttonSave);
        progressBar = findViewById(R.id.progressBar);
        errorLabel = findViewById(R.id.errorLabel);

        buttonSignup.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                validator.validate();
            }
        });
    }

    private class SignupTask extends AsyncTask<RegisterUserModel, Void, Boolean> {
        private Context context;

        SignupTask(Context context) {
            this.context = context;
        }

        @Override
        protected void onPreExecute() {
            super.onPreExecute();
            progressBar.setVisibility(View.VISIBLE);
        }

        @Override
        protected Boolean doInBackground(RegisterUserModel... signupUserModels) {
            Retrofit retrofit = RetrofitBuilder.getInstance();
            AuthorizationClient authorizationClient = retrofit.create(AuthorizationClient.class);
            try {
                Response response = authorizationClient.register(signupUserModels[0]).execute();
                if (response.code() != HTTP_OK) {
                    return false;
                }
                List<WeatherModel> weathers = authorizationClient.loadChanges().execute().body();
                int a = 3;
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
            RegisterUserModel registerModel = new RegisterUserModel(
                    editTextEmail.getText().toString(),
                    editTextPassword.getText().toString(),
                    editTextConfirmPassword.getText().toString()
            );

            SignupTask signupTask = new SignupTask(getApplicationContext());
            signupTask.execute(registerModel);


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
