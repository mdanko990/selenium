import epamPage from '../spec.js';

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
  epamPage.get(string);  
});

When('click on "Contact us"-button', function(){
  epamPage.getContactBtn().click();
  return '"Contact us"-button was clicked';
});

Then('open contact page', function () {
  expect(epamPage.getCurrentUrl()==='https://www.epam.com/about/who-we-are/contact');
});