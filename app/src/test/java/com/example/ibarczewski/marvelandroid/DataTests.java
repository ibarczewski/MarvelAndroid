package com.example.ibarczewski.marvelandroid;

import org.junit.Test;

import static org.junit.Assert.assertEquals;

/**
 * To work on unit tests, switch the Test Artifact in the Build Variants view.
 */
public class DataTests {
    @Test
    public void getFirstChracter_returnsFirstCharacter() throws Exception {
        Data data = new Data();
        HeroModel[] heroModels = new HeroModel[1];
        HeroModel heroModel = new HeroModel();
        heroModels[0] = heroModel;

        data.results = heroModels;

        assertEquals(heroModel, data.getFirstCharacter());
    }

}