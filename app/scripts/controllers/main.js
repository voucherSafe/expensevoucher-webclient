'use strict';

/**
 * @ngdoc function
 * @name expenseVouchersClientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the expenseVouchersClientApp
 */
angular.module('expenseVouchersClientApp')
  .controller('MainCtrl', function ($scope, Employee, $location) {
    $scope.credentials = {};
    $scope.error = '';
    $scope.login = function () {
      console.log('About to login');
      $scope.loginResult = Employee.login($scope.credentials,
        function () {
          $location.path('/home/'+ $scope.loginResult.user.employeeID);
          console.log('loginResult is %j', $scope.loginResult);
        }, function (res) {
          $scope.error = 'Invalid Username/Password. Try Again';
        });
    }
  });

