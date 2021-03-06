package com.example.ibarczewski.marvelandroid;

import android.content.Context;

import javax.inject.Named;
import javax.inject.Singleton;

import dagger.Module;
import dagger.Provides;

@Module
public class ApplicationModule {
    private MarvelComicsApp marvelComicsApp;

    public ApplicationModule(MarvelComicsApp marvelComicsApp) {
        this.marvelComicsApp = marvelComicsApp;
    }

    @Provides
    @Singleton
    public MarvelComicsApp provideApplication() {
        return this.marvelComicsApp;
    }

    @Provides
    @Singleton
    @Named("application_context")
    public Context provideApplicationContext() {
        return this.marvelComicsApp.getApplicationContext();
    }

    @Provides
    @Singleton
    public MarvelService marvelService() {
        return ServiceGenerator.createComicsService();
    }

    @Provides
    @Singleton
    public ImageLoader provideImageLoader(@Named("application_context") Context context){
        return new ImageLoaderImpl(ServiceGenerator.createGlide(context), context);
    }
}
