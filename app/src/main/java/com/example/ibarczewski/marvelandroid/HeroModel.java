package com.example.ibarczewski.marvelandroid;

class HeroResponse {
    Data data;

    public HeroModel getFirstCharacter() {
        return data.getFirstCharacter();
    }
}

class Data{
    HeroModel[] results;

    public HeroModel getFirstCharacter() { return results[0];}
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