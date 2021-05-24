import epamPage from '../spec.js';


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
  epamPage.get(string);  
});

When('click on logo button', function(){
  epamPage.getLogo().click();
  return 'logo clicked';
});

Then('open main page', function () {
  expect(epamPage.getCurrentUrl()==='https://www.epam.com');
});