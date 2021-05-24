module.exports = {
  get: (string) => {
    return browser.get(string);
  },
  getCurrentUrl: () => {
    return browser.getCurrentUrl();
  }
}
