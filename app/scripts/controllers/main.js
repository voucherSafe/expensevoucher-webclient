'use strict';

/**
 * @ngdoc function
 * @name expenseVouchersClientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the expenseVouchersClientApp
 */
angular.module('expenseVouchersClientApp')
  .controller('MainCtrl', function ($scope, User, Employee, $location) {

    $scope.credentials = {};
    $scope.error = '';

    //Check if the user is authenticated already and if yes redirect to home
    if (Employee.isAuthenticated()){
      console.log('User is authenticated and id is ' + Employee.getCurrentId());
      //$location.path('/home/'+ Employee.getCurrentId());
    }

    $scope.login = function () {
      console.log('about to login');

      $scope.loginResult = Employee.login($scope.credentials,
        function () {
          $location.path('/home/'+ $scope.loginResult.user.employeeID);
          console.log('loginResult is %j', $scope.loginResult);
        }, function (res) {
          $scope.error = 'Invalid Username/Password. Try Again';
        });
    }
  });

