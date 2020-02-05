package com.example.diplom.ui.home;

import android.content.Intent;
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
import androidx.lifecycle.ViewModelProviders;

import com.example.diplom.R;
import com.example.diplom.testRetrofit.BackgroundService;
import com.mobsandgeeks.saripaar.ValidationError;
import com.mobsandgeeks.saripaar.Validator;
import com.mobsandgeeks.saripaar.annotation.NotEmpty;

import java.util.List;

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
            Toast.makeText(getActivity(), "Yay! we got it right!", Toast.LENGTH_SHORT).show();

            Intent intent = new Intent(getActivity(), BackgroundService.class);
            getActivity().startService(intent);


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


//            registerApi.loadChanges().enqueue(new Callback<List<WeatherModel>>() {
//                @Override
//                public void onResponse(Call<List<WeatherModel>> call, Response<List<WeatherModel>> response) {
//                    if (response.errorBody() != null) {
//                        throw new Error("fef");
//                    }
//                }
//
//                @Override
//                public void onFailure(Call<List<WeatherModel>> call, Throwable t) {
//                    int a = 3;
//                }
//            });
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
}