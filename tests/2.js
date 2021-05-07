let chai = require('chai');
let chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
let expect = chai.expect;
/*
    Scenario: Contact to company
      Given open the website https://www.epam.com/
      When click on "Contact us"-button
      Then open contact page
*/
Given(/^open the website "([^"]*)"$/, function (string) {
  browser.get(string);  
});

When('click on "Contact us"-button', function(){
  element(by.class('cta-button-ui cta-button--envelope header__control')).click();
  return '"Contact us"-button was clicked';
});

Then('open contact page', function () {
  expect(browser.getCurrentUrl()==='https://www.epam.com/about/who-we-are/contact');
});