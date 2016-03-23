'use strict';

describe('Service: dateprovider', function () {

  // load the service's module
  beforeEach(module('expenseVouchersClientApp'));

  // instantiate service
  var dateprovider;
  beforeEach(inject(function (_dateprovider_) {
    dateprovider = _dateprovider_;
  }));

  it('should do something', function () {
    expect(!!dateprovider).toBe(true);
  });

});
