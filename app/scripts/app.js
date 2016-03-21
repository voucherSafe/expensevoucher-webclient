'use strict';

/**
 * @ngdoc overview
 * @name expenseVouchersClientApp
 * @description
 * # expenseVouchersClientApp
 *
 * Main module of the application.
 */
angular
  .module('expenseVouchersClientApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'lbServices',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider, LoopBackResourceProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/home/:id',{
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'expensevouchers'
      })
      .when('/employee/:id/voucher/create', {
        templateUrl: '../views/create-voucher.html',
        controller: 'CreateVoucherCtrl',
        controllerAs: 'expensevouchers'
      })
      .when('/employee/:employeeid/voucher/:voucherid/edit', {
        templateUrl: '../views/voucher.html',
        controller: 'EmployeeVoucherCtrl'
      })
      .when('/organisation/:organisationid/manager/:managerid/employee/:employeeid/voucher/:voucherid/edit', {
        templateUrl: '../views/voucher.html',
        controller: 'ManagerVoucherCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
    // Use a custom auth header instead of the default 'Authorization'
    LoopBackResourceProvider.setAuthHeader('X-Access-Token');
    // Change the URL where to access the LoopBack REST API server
    LoopBackResourceProvider.setUrlBase('http://localhost:3000/api/');
  });
