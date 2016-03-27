'use strict';

describe('Service: voucherStates', function () {

  // load the service's module
  beforeEach(module('expenseVouchersClientApp'));

  // instantiate service
  var voucherStates;
  beforeEach(inject(function (_voucherStates_) {
    voucherStates = _voucherStates_;
  }));

  it('VoucherState should be well defined', function () {

    expect(voucherStates.draft).toEqual('draft');
    expect(voucherStates.submitted).toEqual('submitted');
    expect(voucherStates.approved).toEqual('approved');
    expect(voucherStates.complete).toEqual('complete');
    expect(voucherStates.rejected).toEqual('rejected');

  });

});
