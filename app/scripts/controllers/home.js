/**
 * @ngdoc function
 * @name expenseVouchersClientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the expenseVouchersClientApp
 */
angular.module('expenseVouchersClientApp')
.controller('HomeCtrl', function($scope, Voucher, Employee, Organisation, $location, $routeParams, voucherStates) {

    $scope.error = '';
    $scope.employee = Employee.get({'id' : $routeParams.id}, function(){
      $scope.organisation = Organisation.get({'id' : $scope.employee.organisationId})
    });

    function sortVouchersByState(vouchers){
      $scope.activeVouchers = [];
      $scope.approvedVouchers = [];
      for(var i=0; i<vouchers.length; i++){
        switch(vouchers[i].state){
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
    });

    $scope.newVoucher = function(){
      $location.path('/create-voucher/' + $routeParams.id);
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
