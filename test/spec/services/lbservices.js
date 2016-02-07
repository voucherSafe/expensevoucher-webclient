'use strict';

describe('Service: lbServices', function () {

  // load the service's module
  beforeEach(module('expenseVouchersClientApp'));

  // instantiate service
  var lbServices;
  beforeEach(inject(function (_lbServices_) {
    lbServices = _lbServices_;
  }));

  it('should do something', function () {
    expect(!!lbServices).toBe(true);
  });

});
