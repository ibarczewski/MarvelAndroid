package com.example.ibarczewski.marvelandroid;

import org.junit.Test;

import static org.junit.Assert.*;

/**
 * To work on unit tests, switch the Test Artifact in the Build Variants view.
 */
public class HeroModelTests {

    @Test
    public void getName_returnsName() throws Exception {
        HeroModel heroModel = new HeroModel();
        String testName = "test name" + Math.random();
        heroModel.name = testName;
        assertEquals(testName, heroModel.getName());
    }

    @Test
    public void getDescription_getsDescription() throws Exception {
        HeroModel heroModel = new HeroModel();
        String testDescription = "test description" + Math.random();
        heroModel.description = testDescription;
        assertEquals(testDescription, heroModel.getDescription());
    }

    @Test
    public void getImage_getsImage() throws Exception {
        HeroModel heroModel = new HeroModel();
        String testImage = "test description" + Math.random();
        ThumbnailModel testModel = new ThumbnailModel();
        testModel.path = "foo";
        testModel.extension = "jpg";
        heroModel.thumbnail = testModel;

        assertEquals("foo.jpg", heroModel.getImage());
    }

}