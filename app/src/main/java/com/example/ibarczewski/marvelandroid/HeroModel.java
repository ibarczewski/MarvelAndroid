package com.example.ibarczewski.marvelandroid;

class HeroResponse {
    String status;
    int code;
    Data data;

    public HeroModel getFirstCharacter() {
        return data.results[0];
    }
}

class Data{
    HeroModel[] results;
}

class HeroModel {
    String name;
    String description;
    ThumbnailModel thumbnail;

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public String getImage(){
        return thumbnail.getImage();
    }
}

class ThumbnailModel{
    String path;
    String extension;

    public String getImage() {
        return path + "." + extension;
    }
}