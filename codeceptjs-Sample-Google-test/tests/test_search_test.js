
Feature('Test search');
let url="https://www.google.com/";
let seach="div.RNNXgb";
Scenario('test something', (I) => {
I.amOnPage(url);
I.seeInCurrentUrl("google");
I.seeElement(seach);

});
