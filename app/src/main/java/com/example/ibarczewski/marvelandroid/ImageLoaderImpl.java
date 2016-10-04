package com.example.ibarczewski.marvelandroid;

import android.content.Context;
import android.widget.ImageView;

import com.bumptech.glide.Glide;

/**
 * Created by ibarczewski on 10/2/16.
 */
public class ImageLoaderImpl implements ImageLoader {
    private final Glide glide;
    private final Context context;

    public ImageLoaderImpl(Glide glide, Context context){
        this.glide = glide;
        this.context = context;
    }

    @Override
    public void loadImageIntoView(String url, ImageView imageView) {
        this.glide.with(context).load(url).into(imageView);
    }
}

