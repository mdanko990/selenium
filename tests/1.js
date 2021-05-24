import epamPage from '../spec.js';

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
  epamPage.get(string);
});

When('click on language dropdown list', function(){
  epamPage.getLanguageBtn().click();
  return 'language button was clicked';
});

Then('open dropdown list', function () {
  expect(epamPage.getLanguagePanel().isDisplayed().toBe(true));
});