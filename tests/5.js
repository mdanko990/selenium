import epamPage from '../spec.js';

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
  epamPage.get(string);  
});

When('find "our offices" on page and choose part of the world', function(){
  epamPage.getFirstTab().click();
  return 'region was chosen(europe)';
});

Then('choose country', function(){
  epamPage.getTabInfo().click();
  return 'country was choosen';
});

Then('open info about choosen country', function () {
  expect(epamPage.getFirstTabInfo().isDisplayed().toBe(true));
});