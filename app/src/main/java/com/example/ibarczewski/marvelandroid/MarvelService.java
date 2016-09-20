package com.example.ibarczewski.marvelandroid;

import retrofit2.Call;
import retrofit2.http.GET;
import retrofit2.http.Query;

public interface MarvelService {
    @GET("v1/public/characters")
    Call<HeroResponse> getHero(
            @Query("name") String name,
            @Query("apikey") String apikey,
            @Query("ts") String ts,
            @Query("hash") String hash
    );
}
