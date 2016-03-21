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
      $scope.orgVouchers = Organisation.vouchers({'id' : $scope.organisation.id}, function(){
        for(var k=0; k<$scope.orgVouchers.length; k++){
          if ($scope.orgVouchers[k].State === voucherStates.submitted){
            $scope.orgSubmittedVouchers.push($scope.orgVouchers[k]);
          }
        }
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



    function sortVouchersByState(vouchers){
      $scope.activeVouchers = [];
      $scope.approvedVouchers = [];
      for(var i=0; i<vouchers.length; i++){
        switch(vouchers[i].State){
          case voucherStates.draft:
            $scope.activeVouchers.push(vouchers[i]);
            break;
          case voucherStates.rejected:
            $scope.activeVouchers.push(vouchers[i]);
            break;
          case voucherStates.approved:
            $scope.approvedVouchers.push(vouchers[i]);
            break;
          default:
            //Nothing to do
        }
      }
    }

    $scope.vouchers = Employee.vouchers({'id' : $routeParams.id}, function(){
      sortVouchersByState($scope.vouchers);
      console.log('%j', $scope.vouchers);
    });

    $scope.newVoucher = function(){
      $location.path('/employee/' + $routeParams.id + '/voucher/create');
    };

    $scope.logout = function(){
      Employee.logout(function(){
        $location.path('/');
      });

    }
  });
