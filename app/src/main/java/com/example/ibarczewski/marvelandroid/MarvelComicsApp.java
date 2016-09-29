package com.example.ibarczewski.marvelandroid;


import android.app.Application;

public class MarvelComicsApp extends Application {
    @Override
    public void onCreate() {
        super.onCreate();

        DaggerApplicationComponent.builder()
                .applicationModule(new ApplicationModule(this))
                .build();
    }


}
