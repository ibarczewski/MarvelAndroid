package com.example.ibarczewski.marvelandroid;

import org.junit.Test;

import static org.junit.Assert.assertEquals;

/**
 * To work on unit tests, switch the Test Artifact in the Build Variants view.
 */
public class ThumbnailModelTests {
    @Test
    public void getImage_returnsImage() throws Exception {
        String testImage = "test description" + Math.random();
        ThumbnailModel testModel = new ThumbnailModel();
        testModel.path = "bar";
        testModel.extension = "png";

        assertEquals("bar.png", testModel.getImage());
    }

}