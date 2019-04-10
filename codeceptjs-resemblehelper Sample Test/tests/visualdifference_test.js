Feature('To test screen comparison with resemble Js Example test');

Scenario('Compare CodeceptIO Home Page @visual-test', async (I) => {
    I.amOnPage("/");
  I.saveScreenshot("Codecept_IO_Screenshot_Image9.png");
     I.seeVisualDiff("Codecept_IO_Screenshot_Image14.png",{tolerance: 0, prepareBaseImage: false});
});

