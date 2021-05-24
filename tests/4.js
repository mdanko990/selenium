let page = require('../spec.js');

let chai = require('chai');
let chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
let expect = chai.expect;
/*
    Scenario: Return to main page
      Given open the website https://www.epam.com/services
      When click on logo button
      Then open main page
*/
Given(/^open the website "([^"]*)"$/, function (string) {  
  page.get(string);  
});

When('click on logo button', function(){
  element(by.class('header__logo-container')).click();
  return 'logo clicked';
});

Then('open main page', function () {
  expect(page.getCurrentUrl()==='https://www.epam.com');
});