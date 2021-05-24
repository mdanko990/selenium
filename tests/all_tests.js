let page = require('../spec.js');

let chai = require('chai');
let chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
let expect = chai.expect;

function test1(){
  Given(/^open the website "([^"]*)"$/, function (string) {  
    page.get(string);
  });
  
  When('click on language dropdown list', function(){
    page.getLanguageBtn().click();
    return 'language button was clicked';
  });
  
  Then('open dropdown list', function () {
    expect(page.getLanguagePanel().isDisplayed().toBe(true));
  });
}

function test2(){
  Given(/^open the website "([^"]*)"$/, function (string) {
    page.get(string);  
  });

  When('click on "Contact us"-button', function(){
    page.getContactBtn().click();
    return '"Contact us"-button was clicked';
  });

  Then('open contact page', function () {
    expect(page.getCurrentUrl()==='https://www.epam.com/about/who-we-are/contact');
  });
}

function test3(){
  Given(/^open the website "([^"]*)"$/, function (string) {
    page.get(string);  
  });
  
  When('click on language dropdown list', function(){
    page.getLanguageBtn().click();
    return 'language button was clicked';
  });
  
  Then('open dropdown list', function () {
    page.get7Language().click();
    return 'Ukranian selected';
  });
  
  Then('open ukrainian version of site', function(){
    expect(page.getCurrentUrl()==='https://careers.epam.ua/');
  });
}

function test4(){
  Given(/^open the website "([^"]*)"$/, function (string) {  
    page.get(string);  
  });
  
  When('click on logo button', function(){
    page.getLogo().click();
    return 'logo clicked';
  });
  
  Then('open main page', function () {
    expect(page.getCurrentUrl()==='https://www.epam.com');
  });
}

function test5(){
  Given(/^open the website "([^"]*)"$/, function (string) {  
    page.get(string);  
  });
  
  When('find "our offices" on page and choose part of the world', function(){
    page.getFirstTab().click();
    return 'region was chosen(europe)';
  });
  
  Then('choose country', function(){
    page.getTabInfo().click();
    return 'country was choosen';
  });
  
  Then('open info about choosen country', function () {
    expect(page.getFirstTabInfo().isDisplayed().toBe(true));
  });
}

function test6(){
  Given(/^open the website "([^"]*)"$/, function (string) {  
    page.get(string);  
  });
  
  When('click on search icon', function(){
    page.getSearch().click();
    return 'search button was clicked';
  });
  
  Then('open search block', function () {
    expect(page.getSearchPanel().isDisplayed().toBe(true));
  });
}