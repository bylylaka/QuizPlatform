package com.example.diplom.ui.home;

import android.content.ComponentName;
import android.content.Intent;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

import androidx.annotation.Nullable;
import androidx.annotation.NonNull;
import androidx.fragment.app.Fragment;
import androidx.lifecycle.Observer;
import androidx.lifecycle.ViewModelProviders;

import com.example.diplom.MainActivity;
import com.example.diplom.R;
import com.example.diplom.testRetrofit.ApiBuilder;
import com.example.diplom.testRetrofit.BackgroundService;
import com.example.diplom.testRetrofit.LoginUserModel;
import com.example.diplom.testRetrofit.RegisterClient;
import com.example.diplom.testRetrofit.RegisterUserModel;
import com.example.diplom.testRetrofit.UnsafeOkHttpClient;
import com.example.diplom.testRetrofit.UserModel;
import com.example.diplom.testRetrofit.WeatherRepo;
import com.mobsandgeeks.saripaar.ValidationError;
import com.mobsandgeeks.saripaar.Validator;
import com.mobsandgeeks.saripaar.annotation.Email;
import com.mobsandgeeks.saripaar.annotation.Length;
import com.mobsandgeeks.saripaar.annotation.NotEmpty;
import com.mobsandgeeks.saripaar.annotation.Password;
import com.mobsandgeeks.saripaar.annotation.Pattern;

import java.io.IOError;
import java.io.IOException;
import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

public class HomeFragment extends Fragment {

    private HomeViewModel homeViewModel;
    private Button buttonSave;
    private Validator validator;
    private static RegisterClient registerApi;
    private Retrofit retrofit;

    @NotEmpty
//    @Email
    private EditText editTextEmail;

    @NotEmpty
//    @Password
    private EditText editTextPassword;

    public View onCreateView(@NonNull LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
        homeViewModel = ViewModelProviders.of(this).get(HomeViewModel.class);
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
            Toast.makeText(getActivity(), "Yay! we got it right!", Toast.LENGTH_SHORT).show();

            Intent intent = new Intent(getActivity(), BackgroundService.class);
            getActivity().startService(intent);



//            retrofit = ApiBuilder.build();
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
////                List<WeatherRepo> list = registerApi.loadChanges().execute().body();
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



//            registerApi.loadChanges().enqueue(new Callback<List<WeatherRepo>>() {
//                @Override
//                public void onResponse(Call<List<WeatherRepo>> call, Response<List<WeatherRepo>> response) {
//                    if (response.errorBody() != null) {
//                        throw new Error("fef");
//                    }
//                }
//
//                @Override
//                public void onFailure(Call<List<WeatherRepo>> call, Throwable t) {
//                    int a = 3;
//                }
//            });
        }

        @Override
        public void onValidationFailed(List<ValidationError> errors) {
            for (ValidationError error : errors) {
                View view = error.getView();
                String message = error.getCollatedErrorMessage(getActivity());

                // Display error messages ;)
                if (view instanceof EditText) {
                    ((EditText) view).setError(message);
                } else {
                    Toast.makeText(getActivity(), message, Toast.LENGTH_LONG).show();
                }
            }
        }
    };
}