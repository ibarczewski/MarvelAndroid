package com.example.ibarczewski.marvelandroid;

import dagger.Module;
import dagger.Provides;

@Module
public class ActivityModule {

    @Provides
    @PerActivity
    public ServiceGenerator provideService(){
        return new ServiceGenerator();
    }
}
