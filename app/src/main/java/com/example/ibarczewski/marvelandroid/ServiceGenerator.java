package com.example.ibarczewski.marvelandroid;

import android.content.Context;

import com.bumptech.glide.Glide;
import com.bumptech.glide.integration.okhttp3.OkHttpUrlLoader;
import com.bumptech.glide.load.model.GlideUrl;
import com.squareup.picasso.Picasso;

import java.io.IOException;
import java.io.InputStream;

import okhttp3.HttpUrl;
import okhttp3.Interceptor;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;
import okhttp3.logging.HttpLoggingInterceptor;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

public class ServiceGenerator {
    private static MarvelService marvelService;
    private static Glide glide;
    public static final String API_BASE_URL = "http://gateway.marvel.com/";

    private static OkHttpClient.Builder httpClient = new OkHttpClient.Builder();

    private static Retrofit.Builder builder =
            new Retrofit.Builder()
                    .baseUrl(API_BASE_URL)
                    .addConverterFactory(GsonConverterFactory.create());

    // Deprecated
    public static <S> S createService(Class<S> serviceClass) {
        final HttpLoggingInterceptor logger = new HttpLoggingInterceptor();
        logger.setLevel(HttpLoggingInterceptor.Level.BODY);
        httpClient.addInterceptor(logger);
        Retrofit retrofit = builder.client(httpClient.build()).build();
        return retrofit.create(serviceClass);
    }

    public static MarvelService createComicsService() {
        if(marvelService == null){
            Retrofit retrofit = builder.client(getClient()).build();
            marvelService = retrofit.create(MarvelService.class);
        }
        return marvelService;
    }

    public static Glide createGlide(Context appContext) {
        if(glide == null){
            glide = Glide.get(appContext);
            glide.register(GlideUrl.class, InputStream.class, new OkHttpUrlLoader.Factory(getClient()));
        }
        return glide;
    }

    private static OkHttpClient getClient(){
        final OkHttpClient.Builder httpClient = new OkHttpClient.Builder();
        httpClient.addInterceptor(new AuthenticationInterceptor());
        HttpLoggingInterceptor loggingInterceptor = new HttpLoggingInterceptor();
        loggingInterceptor.setLevel(HttpLoggingInterceptor.Level.BODY);
        httpClient.addInterceptor(loggingInterceptor);
        return httpClient.build();
    }

    private static class AuthenticationInterceptor implements Interceptor {

        static final String PUBLIC_API_KEY = "260d86172bed32914e6fa8a18550028e";
        static final String PRIVATE_API_KEY = "eb337412b2eaa7300ede0584218d97635c1227d1";

        @Override
        public Response intercept(final Interceptor.Chain chain) throws IOException {
            Request original = chain.request();
            HttpUrl originalHttpUrl = original.url();

            String timeStamp = String.valueOf(System.currentTimeMillis());

            String hashInput = timeStamp + PRIVATE_API_KEY + PUBLIC_API_KEY;
            //String hash = new String(Hex.encodeHex(DigestUtils.md5(hashInput)));
            // WARNING: PURELY TO GET IT TO COMPILE
            // WARNING: PURELY TO GET IT TO COMPILE
            // WARNING: PURELY TO GET IT TO COMPILE
            String hash = "";
            HttpUrl url = originalHttpUrl.newBuilder()
                    .addQueryParameter("apikey", PUBLIC_API_KEY)
                    .addQueryParameter("ts", timeStamp)
                    .addQueryParameter("hash", hash)
                    .build();

            Request.Builder requestBuilder = original.newBuilder().url(url);

            Request request = requestBuilder.build();
            return chain.proceed(request);
        }
    }

}
