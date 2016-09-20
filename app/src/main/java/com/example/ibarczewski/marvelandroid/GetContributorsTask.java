package com.example.ibarczewski.marvelandroid;

import android.os.AsyncTask;
import android.util.Log;

import java.io.IOException;
import java.net.URL;

import retrofit2.Call;

/**
 * Created by ibarczewski on 9/18/16.
 */
public class GetContributorsTask extends AsyncTask<URL, Integer, Long> {
    final String API_KEY = "260d86172bed32914e6fa8a18550028e";
    final String PRIVATE_API_KEY = "eb337412b2eaa7300ede0584218d97635c1227d1";

    @Override
    protected Long doInBackground(URL... urls) {
        MarvelClient client = ServiceGenerator.createService(MarvelClient.class);

        Long tsLong = System.currentTimeMillis()/1000;
        String ts = tsLong.toString();

        Call<HeroResponse> call = null;
        String md5 = MD5(ts + PRIVATE_API_KEY + API_KEY);
        try{
            call =
                    client.getHero("spider-man", API_KEY, ts, md5);
        }
        catch (Exception e){
            Log.d("ERROR", e.getLocalizedMessage());
        }

        HeroResponse res = null;

        try {
            res = call.execute().body();
        } catch (IOException e) {
            Log.d("errored", "out");
            // handle errors
        }

        return Long.valueOf(1);
    }

    private String MD5(String md5) {
        try {
            java.security.MessageDigest md = java.security.MessageDigest.getInstance("MD5");
            byte[] array = md.digest(md5.getBytes());
            StringBuffer sb = new StringBuffer();
            for (int i = 0; i < array.length; ++i) {
                sb.append(Integer.toHexString((array[i] & 0xFF) | 0x100).substring(1,3));
            }
            return sb.toString();
        } catch (java.security.NoSuchAlgorithmException e) {
        }
        return null;
    }
}
