let page = require('../spec.js');

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
  page.get(string);  
});

When('click on language dropdown list', function(){
  element(by.buttonText('Global (EN)')).click();
  return 'language button was clicked';
});

Then('open dropdown list', function () {
  element.all(by.class('location-selector__link')).get(7).click();
  return 'Ukranian selected';
});

Then('open ukrainian version of site', function(){
  expect(page.getCurrentUrl()==='https://careers.epam.ua/');
});