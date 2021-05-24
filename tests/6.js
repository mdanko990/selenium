import epamPage from '../spec.js';

let chai = require('chai');
let chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
let expect = chai.expect;
/*
  Scenario: Search action
      Given open the website https://www.epam.com/
      When click on search icon
      Then open search block
*/
Given(/^open the website "([^"]*)"$/, function (string) {  
  epamPage.get(string);  
});

When('click on search icon', function(){
  epamPage.getSearch().click();
  return 'search button was clicked';
});

Then('open search block', function () {
  expect(epamPage.getSearchPanel().isDisplayed().toBe(true));
});