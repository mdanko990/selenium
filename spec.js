class epamPage{
  get(string){
    return browser.get(string);
  }
  getCurrentUrl(){
    return browser.getCurrentUrl();
  }
  getLanguageBtn(){
    return element(by.class('location-selector__button'));
  }
  getLanguagePanel(){
    return element(by.class('location-selector__panel'));
  }
  getContactBtn(){
    return element(by.class('cta-button-ui cta-button--envelope header__control'));
  }
  get7Language(){
    return element.all(by.class('location-selector__link')).get(7);
  }
  getLogo(){
    return element(by.class('header__logo-container'));
  }
  getFirstTab(){
    return element.all(by.class('tabs__title')).get(1);
  }
  getFirstTabInfo(){
    return element.all(by.class('locations-viewer__countrye')).get(1);
  }
  getSearchBtn(){
    return element(by.class('header-search__button header__icon'));
  }
  getSearchPanel(){
    return element(by.class('header-search__panel'));
  }
}