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
    'lbServices'
  ])
  .config(function ($routeProvider, LoopBackResourceProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/expensevouchers',{
        templateUrl: 'views/expensevouchers.html',
        controller: 'ExpenseVoucherCtrl',
        controllerAs: 'expensevouchers'
      })
      .when('/createvoucher', {
        templateUrl: 'views/newvoucher.html',
        controller: 'ExpenseVoucherCtrl',
        controllerAs: 'expensevouchers'
      })
      .otherwise({
        redirectTo: '/'
      });
    // Use a custom auth header instead of the default 'Authorization'
    LoopBackResourceProvider.setAuthHeader('X-Access-Token');
    // Change the URL where to access the LoopBack REST API server
    LoopBackResourceProvider.setUrlBase('http://localhost:3000/api/');
  });
