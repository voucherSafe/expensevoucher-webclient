'use strict';
/**
 * @ngdoc function
 * @name expenseVouchersClientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the expenseVouchersClientApp
 */
angular.module('expenseVouchersClientApp')
  .controller('ManagerVoucherCtrl', function($scope, Voucher, Employee, Organisation, Expense, $location, $routeParams, voucherStates) {

    $scope.error = '';
    $scope.employee = Organisation.employees.findById({'id' : $routeParams.organisationid,
    'fk': $routeParams.employeeid}, function(){
      $scope.recipientDetails = $scope.employee.firstName + " " + $scope.employee.lastName + "\n"
      + $scope.employee.address;
      $scope.organisation = Organisation.get({'id' : $scope.employee.organisationId}, function(){
        //Get the voucher
        $scope.voucher = Voucher.findById({id: $routeParams.voucherid}, function(){
          //Categorize voucher state to decide action buttons
          if (($scope.voucher.State === voucherStates.draft || $scope.voucher.State === voucherStates.rejected) &&
            ($scope.employee.employeeID === $scope.voucher.employeeId)){
            $scope.activeVoucher = true;
          }else if($scope.voucher.State === voucherStates.submitted){
            $scope.submittedVoucher = true;
          }else if (($scope.voucher.State === voucherStates.completed) ||
            ($scope.voucher.State === voucherStates.approved)){
            $scope.archivedVoucher = true;
          }
          //Take total amount
          $scope.voucherTotalAmount = $scope.voucher.Amount;
          //Get expenses for this voucher
          $scope.expenses = Voucher.expenses({'id': $routeParams.voucherid});
        });
      });
    });

    $scope.cancel = function(){
      $location.path('/home/' + $routeParams.managerid);
    };

    //Perform approve or reject
    function managerAction(nextState){
      if ($scope.voucher.employeeId === $routeParams.managerID){
        $scope.error = 'You can\'t approve your own voucher. Ask any other manager in this organisation to approve';
        return;
      }
      $scope.voucher.State = nextState;
      $scope.voucher = Organisation.vouchers.updateById({'id': $routeParams.organisationid,
        'fk': $routeParams.voucherid}, $scope.voucher, function(err, voucher){
        if (err){
          $scope.error = 'Unable to save voucher. Check network settings and try again later.';
        }else{
          $location.path('/home/' + $routeParams.managerid);
        }
      });
    }

    $scope.approve = function(){
      managerAction(voucherStates.approved);
    };

    $scope.reject = function(){
      managerAction(voucherStates.rejected);
    };

  });
