describe('VoucherSafe Web Client App', function() {

  var latestResult = element(by.className('latest'));

  beforeEach(function() {
    browser.get('/#/');
  });

  it('should have a title', function() {
    expect(browser.getTitle()).toEqual('Expense Voucher Management System');
  });

  it('should Login and Logout successfully', function() {
    email.sendKeys('dhanya@kollavarsham.org');
    password.sendKeys('temp123');
    //Perform login
    loginButton.click();
    expect(element(by.className('btn btn-primary')).getText()).toContain('Log Out');
    //Perform logout
    loginButton.click();
    expect(element(by.className('btn btn-primary')).getText()).toContain('Log In');
  });

  it('should create and save voucher for employee', function() {
    var createVoucherButton = element(by.buttonText('Create a new Voucher'));
    email.sendKeys('dhanya@kollavarsham.org');
    password.sendKeys('temp123');
    //Perform login
    loginButton.click();
    //wait for next window
    expect(browser.urlContains('home'));
    createVoucherButton.click();
    expect(element.)

  });


});
