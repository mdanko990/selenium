const { Then } = require('@cucumber/cucumber');
let chai = require('chai');
let chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
let expect = chai.expect;
/*
    Scenario: Find locations of offices
      Given open the website https://www.epam.com/
      When find "our offices" on page and choose part of the world
      Then choose country
      Then open info about choosen country
*/
Given(/^open the website "([^"]*)"$/, function (string) {  
  browser.get(string);  
});

When('find "our offices" on page and choose part of the world', function(){
  element.all(by.class('tabs__title')).get(1).click();
  return 'region was chosen(europe)';
});

Then('choose country', function(){
  element.all(by.class('locations-viewer__countrye')).get(1).click();
  return 'country was choosen';
});

Then('open info about choosen country', function () {
  expect(element.all(by.class('locations-viewer__countrye')).get(1).isDisplayed().toBe(true));
});