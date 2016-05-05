'use strict';

describe('Service: ModalDialogs', function () {

  // load the service's module
  beforeEach(module('expenseVouchersClientApp'));

  // instantiate service
  var ModalDialogs;
  beforeEach(inject(function (_ModalDialogs_) {
    ModalDialogs = _ModalDialogs_;
  }));

  it('should do something', function () {
    expect(!!ModalDialogs).toBe(true);
  });

});
