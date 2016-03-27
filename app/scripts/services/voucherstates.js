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
  });
