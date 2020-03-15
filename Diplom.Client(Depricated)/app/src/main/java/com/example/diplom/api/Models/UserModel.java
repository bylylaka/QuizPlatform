package com.example.diplom.api.Models;

public class UserModel {

    private String email;

    private String userName;

    private int age;

    private Gender Gender;

    private String avatar;

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public com.example.diplom.api.Models.Gender getGender() {
        return Gender;
    }

    public void setGender(com.example.diplom.api.Models.Gender gender) {
        Gender = gender;
    }

    public String getAvatar() {
        return avatar;
    }

    public void setAvatar(String avatar) {
        this.avatar = avatar;
    }
}
