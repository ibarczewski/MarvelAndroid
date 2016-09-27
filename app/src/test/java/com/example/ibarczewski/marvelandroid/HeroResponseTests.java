package com.example.ibarczewski.marvelandroid;

import org.junit.Test;

import static org.junit.Assert.assertEquals;

/**
 * To work on unit tests, switch the Test Artifact in the Build Variants view.
 */
public class HeroResponseTests {
    @Test
    public void getFirstCharacter_returnsFirstCharacter() throws Exception {
        HeroResponse heroResponse = new HeroResponse();
        Data data = new Data();
        HeroModel[] heroModels = new HeroModel[1];
        HeroModel heroModel = new HeroModel();
        heroModels[0] = heroModel;

        data.results = heroModels;
        heroResponse.data = data;

        assertEquals(heroModel, heroResponse.getFirstCharacter());
    }

}