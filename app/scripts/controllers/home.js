/**
 * @ngdoc function
 * @name expenseVouchersClientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the expenseVouchersClientApp
 */
angular.module('expenseVouchersClientApp')
  .controller('HomeCtrl', function($scope, Voucher, Employee, Organisation, $location, $routeParams, voucherStates) {


    //Manager's functionality - Elements in the Manager's corner in the view
    $scope.orgSubmittedVouchers = [];

    function getVouchersForOrganisation(){
      $scope.orgSubmittedVouchers = Organisation.vouchers({'id' : $scope.organisation.id,
        'filter' : {'where': {'State' : voucherStates.submitted}, 'limit':5}}, function(){
      });
    }

    $scope.error = '';
    $scope.employee = Employee.get({'id' : $routeParams.id}, function(){
      console.log('Employee is %j', $scope.employee);
      $scope.organisation = Organisation.get({'id' : $scope.employee.organisationId}, function(){
        if ($scope.employee.isManager){
          getVouchersForOrganisation();
        }
      });
    });

    $scope.activeVouchers = Employee.vouchers({'id' : $routeParams.id,
      'filter' : {'where': {'State' : voucherStates.draft}, 'limit':5}}, function(){
      console.log('%j', $scope.activeVouchers);
    });

    $scope.approvedVouchers = Employee.vouchers({'id' : $routeParams.id,
      'filter' : {'where': {'State' : voucherStates.approved}, 'limit':5}}, function(){
      console.log('%j', $scope.approvedVouchers);
    });

    $scope.employeeVoucherQuery = function(voucherState){
      $location.path('/employee/' + $routeParams.id + '/vouchers/' + voucherState);
    };

    $scope.newVoucher = function(){
      $location.path('/employee/' + $routeParams.id + '/voucher/create');
    };

    $scope.logout = function(){
      Employee.logout(function(){
        $location.path('/');
      });
    };

  });
