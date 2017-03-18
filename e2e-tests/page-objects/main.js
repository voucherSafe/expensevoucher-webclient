var MainPage = function() {
  var email = element(by.model('credentials.email'));
  var password = element(by.model('credentials.password'));
  var loginButton = element(by.className('btn btn-primary'));

  this.get = function() {
    browser.get('/#/');
  };

  this.setName = function(name) {
    nameInput.sendKeys(name);
  };

  this.getGreeting = function() {
    return greeting.getText();
  };
};
