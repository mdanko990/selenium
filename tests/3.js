import epamPage from '../spec.js';

let chai = require('chai');
let chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
let expect = chai.expect;
/*
    Scenario: Change language of site to Ukrainian
      Given https://www.epam.com/
      Then click on language dropdown list
      Then open dropdown list
      Then open ukrainian version of site
*/
Given(/^open the website "([^"]*)"$/, function (string) {
  epamPage.get(string);  
});

When('click on language dropdown list', function(){
  epamPage.getLanguageBtn().click();
  return 'language button was clicked';
});

Then('open dropdown list', function () {
  epamPage.get7Language().click();
  return 'Ukranian selected';
});

Then('open ukrainian version of site', function(){
  expect(epamPage.getCurrentUrl()==='https://careers.epam.ua/');
});