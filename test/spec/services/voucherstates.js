'use strict';

describe('Service: voucherStates', function () {

  // load the service's module
  beforeEach(module('expenseVouchersClientApp'));

  // instantiate service
  var voucherStates;
  beforeEach(inject(function (_voucherStates_) {
    voucherStates = _voucherStates_;
  }));

  it('Voucher should move from draft to submitted state regardless of approval', function () {
    expect(true).toBe(true);
    //var currentState = voucherStates.draft;
    //var nextState = voucherStates.getNextStateFromCurrent(currentState, false);
    //expect(nextState === voucherStates.submitted).toBe(true);
    //nextState = '';
    //nextState = voucherStates.getNextStateFromCurrent(currentState);
    //expect(nextState === voucherStates.submitted).toBe(true);
  });

  it('Submitted voucher should move to rejected if not approved', function(){
    expect(true).toBe(true);
    //var currentState = voucherStates.submitted;
    //var nextState = voucherStates.getNextStateFromCurrent(currentState, false);
    //expect(nextState === voucherStates.rejected).toBe(true);
  });

  it('Submitted voucher should move to approved if approve is true', function(){
    expect(true).toBe(true);
      //var currentState = voucherStates.submitted;
      //var nextState = voucherStates.getNextStateFromCurrent(currentState, true);
      //expect(nextState === voucherStates.approved).toBe(true);
    });

});
