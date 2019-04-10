Feature('Example test');

Scenario('test something', async (I) => {
    I.amOnPage("/");
    I.click('Sign in')
    I.fillField('Email', 'hello@world.com');
  I.fillField('Password', '123456');
   I.click('Sign in');
   I.see(' Incorrect username or password. ');
    I.dontSeeInCurrentUrl("/"); 
  I.saveScreenshot("Codecept_IO_Screenshot_Image9.png");
     I.seeVisualDiff("Codecept_IO_Screenshot_Image14.png",{tolerance: 0, prepareBaseImage: false});
});

