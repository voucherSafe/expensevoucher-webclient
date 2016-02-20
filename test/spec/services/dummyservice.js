'use strict';

describe('Service: dummyService', function () {

  // load the service's module
  beforeEach(angular.mock.module('expenseVouchersClientApp'));

  // instantiate service
  var dummyService;
  beforeEach(angular.mock.inject(function (_dummyService_) {
    dummyService = _dummyService_;
  }));

  it('should do something', function () {
    expect(true).toBe(true);
  });

});
