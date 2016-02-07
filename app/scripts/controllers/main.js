'use strict';

/**
 * @ngdoc function
 * @name expenseVouchersClientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the expenseVouchersClientApp
 */
angular.module('expenseVouchersClientApp')
  .controller('MainCtrl', function ($scope, User, $location) {
    $scope.credentials = {};
    $scope.error = '';
    $scope.login = function () {
      console.log('About to login');
      $scope.loginResult = User.login($scope.credentials,
        function () {
          $location.path('/expensevouchers');
        }, function (res) {
          $scope.error = "Invalid Username/Password. Try Again";
        });
    }
  });

/**
 * @ngdoc function
 * @name expenseVouchersClientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the expenseVouchersClientApp
 */
angular.module('expenseVouchersClientApp')
.controller('ExpenseVoucherCtrl', function($scope, User, ExpenseVoucher, Employee, $location) {
    $scope.error = '';
    $scope.expenseVouchers = ExpenseVoucher.query();
    $scope.submitters = Employee.query();
    $scope.activeVoucher = {state : 'draft'};

    $scope.newVoucher = function(){
      $location.path('/createvoucher');
    };

    $scope.createVoucher = function(){
      $scope.activeVoucher = ExpenseVoucher.create($scope.activeVoucher,
      function(res, headers){
        //success
      },
      function(err){
        //error
        $scope.error = err;
      });
    };

    $scope.submitVoucher = function(){

    };

  });
