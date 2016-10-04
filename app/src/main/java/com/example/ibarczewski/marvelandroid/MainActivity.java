package com.example.ibarczewski.marvelandroid;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.widget.ImageView;
import android.widget.TextView;

import com.squareup.picasso.Picasso;

import javax.inject.Inject;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class MainActivity extends AppCompatActivity {
    @Inject
    MarvelComicsApp marvelService;
    @Inject ImageLoader imageLoader;

    final String API_KEY = "260d86172bed32914e6fa8a18550028e";
    final String PRIVATE_API_KEY = "eb337412b2eaa7300ede0584218d97635c1227d1";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        MarvelComicsApp application = (MarvelComicsApp) getApplication();
        application.getApplicationComponent().inject(this);
        setContentView(R.layout.activity_main);

        processNetworkingOffMain();

    }

    @Override
    protected void onStop(){
        super.onStop();
    }

    private void processNetworkingOffMain() {
        Long tsLong = System.currentTimeMillis()/1000;
        String ts = tsLong.toString();
        String md5 = generateHash(ts);

        final MarvelService characterService = ServiceGenerator.createService(MarvelService.class);
        characterService.getHero("spider-man", API_KEY, ts, md5).enqueue(new Callback<HeroResponse>() {
            @Override
            public void onResponse(final Call<HeroResponse> call, final Response<HeroResponse> response) {
                if (response.isSuccessful()) {
                    updateTitle(response.body());
                    Log.i("Yay!", response.body().toString());
                } else {
                    Log.e("Error", "Service error: " + response.message());
                }
            }

            @Override
            public void onFailure(final Call<HeroResponse> call, final Throwable t) {
                Log.e("Failure", t.getLocalizedMessage(), t);
            }
        });
    }

    private void updateTitle(final HeroResponse charactersHeroResponse) {
        final HeroModel firstCharacter = charactersHeroResponse != null ? charactersHeroResponse.getFirstCharacter() : null;
        final String title = firstCharacter != null ? firstCharacter.getName() : "UNDEFINED";
        final String description = firstCharacter != null ? firstCharacter.getDescription() : "UNDEFINED";
        ((TextView) findViewById(R.id.alias)).setText(title);
        ((TextView) findViewById(R.id.description)).setText(description);
        final String image = firstCharacter.getImage();
        imageLoader.loadImageIntoView(image, (ImageView) findViewById(R.id.character_image));
    }

    private String generateHash(String ts) {

        String md5 = ts + PRIVATE_API_KEY + API_KEY;

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
