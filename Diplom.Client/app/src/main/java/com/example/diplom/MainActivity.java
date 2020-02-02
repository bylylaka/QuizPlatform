package com.example.diplom;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;

import com.google.android.material.bottomnavigation.BottomNavigationView;

import androidx.appcompat.app.AppCompatActivity;
import androidx.navigation.NavController;
import androidx.navigation.Navigation;
import androidx.navigation.ui.AppBarConfiguration;
import androidx.navigation.ui.NavigationUI;

public class MainActivity extends AppCompatActivity {

//    private static RegisterClient registerApi;
//    private Retrofit retrofit;

    private BottomNavigationView navView;
    private NavController navController;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        initView();

        AppBarConfiguration appBarConfiguration = new AppBarConfiguration.Builder(
                R.id.navigation_home, R.id.navigation_dashboard, R.id.navigation_notifications)
                .build();
        NavigationUI.setupActionBarWithNavController(this, navController, appBarConfiguration);
        NavigationUI.setupWithNavController(navView, navController);



//        try {
//            Intent intent = new Intent(this, BackgroundService.class);
//            startService(intent);
//            int c = 5;
//
//            Thread.sleep(2000);
//
//        } catch (Exception e) {
//            int a = 3;
//        }



//        retrofit = new Retrofit.Builder()
//                .baseUrl("https://10.0.2.2:5001") //Базовая часть адреса
//                .client(UnsafeOkHttpClient.getUnsafeOkHttpClient())
//                .addConverterFactory(GsonConverterFactory.create()) //Конвертер, необходимый для преобразования JSON'а в объекты
//                .build();
//        registerApi = retrofit.create(RegisterClient.class); //Создаем объект, при помощи которого будем выполнять запросы
//
//        RegisterUserModel registerModel = new RegisterUserModel("55555mixaaasfsfa", "55fs5", "55fs5");
//
//        registerApi.register(registerModel).enqueue(new Callback<UserModel>() {
//            @Override
//            public void onResponse(Call<UserModel> call, Response<UserModel> response) {
////                if (response.errorBody() != null){
////                    throw new Error("fef");
////                }
//            }
//
//            @Override
//            public void onFailure(Call<UserModel> call, Throwable t) {
//                int a = 3;
//            }
//        });
//
//
//        LoginUserModel loginModel = new LoginUserModel("55555mixaaasfsfa", "55fs5");
//
//        registerApi.login(loginModel).enqueue(new Callback<UserModel>() {
//            @Override
//            public void onResponse(Call<UserModel> call, Response<UserModel> response) {
//                if (response.errorBody() != null) {
//                    throw new Error("fef");
//                }
//            }
//
//            @Override
//            public void onFailure(Call<UserModel> call, Throwable t) {
//                int a = 3;
//            }
//        });
    }

    private void initView() {
        navView = findViewById(R.id.nav_view);
        navController = Navigation.findNavController(this, R.id.nav_host_fragment);
    }
}
