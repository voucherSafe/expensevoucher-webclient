'use strict';

/**
 * @ngdoc service
 * @name expenseVouchersClientApp.voucherStates
 * @description
 * # voucherStates
 * Service in the expenseVouchersClientApp.
 */
angular.module('expenseVouchersClientApp')
  .service('voucherStates', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.draft = 'draft';
    this.submitted = 'submitted';
    this.approved = 'approved';
    this.complete = 'complete';
    this.rejected = 'rejected';
    this.getNextStateFromCurrent = function(currentState, approve){
      var nextState = '';
      switch(currentState){
        case this.draft:
          nextState = this.submitted;
          break;
        case this.submitted:
          if (approve === true){
            nextState = this.approved;
          }else{
            nextState = this.rejected;
          }
          break;
        case this.approved:
          nextState = this.complete;
          break;
        default:
          console.log('Invalid Voucher state.');
      }
      return nextState;
    };
  });
