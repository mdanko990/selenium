let page = require('../spec.js');

let chai = require('chai');
let chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
let expect = chai.expect;
/*
    Scenario: Discover cases
      Given open the website https://www.epam.com/
      When click on "our work" option on navigation bar
      Then open https://www.epam.com/our-work page
*/
Given(/^open the website "([^"]*)"$/, function (string) {  
  page.get(string);  
});

When('click on "our work" option on navigation bar', function(){
  element(by.class('cta-button-ui cta-button--envelope header__control')).click();
  return '"our work" option was choosen';
});

Then('open https://www.epam.com/our-work page', function () {
  expect(page.getCurrentUrl()==='https://www.epam.com/our-work');
});