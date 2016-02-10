'use strict';

/**
 * @ngdoc function
 * @name expenseVouchersClientApp.controller:EditVoucherCtrl
 * @description
 * # EditVoucherCtrl
 * Controller of the expenseVouchersClientApp
 */
angular.module('expenseVouchersClientApp')
  .controller('EditVoucherCtrl', function ($scope, User, ExpenseVoucher, Employee, $location, $routeParams) {
    //this.awesomeThings = [
    //  'HTML5 Boilerplate',
    //  'AngularJS',
    //  'Karma'
    //];
    $scope.voucher = ExpenseVoucher.findById({id: $routeParams.id});

  });
