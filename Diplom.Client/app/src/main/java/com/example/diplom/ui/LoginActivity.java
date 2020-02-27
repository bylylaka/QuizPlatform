package com.example.diplom.ui;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.AsyncTask;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ProgressBar;
import android.widget.TextView;
import android.widget.Toast;

import com.example.diplom.R;
import com.example.diplom.api.AuthorizationClient;
import com.example.diplom.api.LoginUserModel;
import com.example.diplom.api.RetrofitBuilder;
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
    private TextView singupLink;

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
        buttonLogin = findViewById(R.id.buttonLogin);
        progressBar = findViewById(R.id.progressBar);
        errorLabel = findViewById(R.id.errorLabel);
        singupLink = findViewById(R.id.loginLink);

        buttonLogin.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                validator.validate();
            }
        });
        singupLink.setOnClickListener(singupInsteadListenner);
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
            SharedPreferences sharedPreferences = getPreferences(Context.MODE_PRIVATE);
            Retrofit retrofit = RetrofitBuilder.getInstance(sharedPreferences);
            AuthorizationClient authorizationClient = retrofit.create(AuthorizationClient.class);
            try {
                Response response = authorizationClient.login(loginUserModels[0]).execute();
                if (response.code() != HTTP_OK) {
                    return false;
                }
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

    View.OnClickListener singupInsteadListenner = new View.OnClickListener() {
        @Override
        public void onClick(View v) {
            Intent intent = new Intent(getApplicationContext(), SignUpActivity.class);
            startActivity(intent);
        }
    };
}
