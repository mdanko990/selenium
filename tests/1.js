let chai = require('chai');
let chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
let expect = chai.expect;
/*
    Scenario: click on Language
      Given open the website https://www.epam.com/
      When click on language dropdown list
      Then open dropdown list
*/
Given(/^open the website "([^"]*)"$/, function (string) {  
  browser.get(string);  
});

When('click on language dropdown list', function(){
  element(by.class('location-selector__button')).click();
  return 'language button was clicked';
});

Then('open dropdown list', function () {
  expect(element(by.class('location-selector__panel')).isDisplayed().toBe(true));
});
