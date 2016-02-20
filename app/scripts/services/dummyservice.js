'use strict';

/**
 * @ngdoc service
 * @name expenseVouchersClientApp.dummyService
 * @description
 * # dummyService
 * Service in the expenseVouchersClientApp.
 */
angular.module('expenseVouchersClientApp')
  .service('dummyService', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.dummyVar = true;
  });
