'use strict';
/**
 * @ngdoc function
 * @name expenseVouchersClientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the expenseVouchersClientApp
 */
angular.module('expenseVouchersClientApp')
  .controller('ManagerVoucherCtrl', function($scope, Voucher, Employee, Organisation, Expense,
                                             $location, $routeParams, voucherStates, tallyUtils, ModalDialogs) {

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
          }else if (($scope.voucher.State === voucherStates.complete) ||
            ($scope.voucher.State === voucherStates.approved)){
            $scope.archivedVoucher = true;
          }
          //Take total amount
          $scope.voucherTotalAmount = $scope.voucher.Amount;

          //Date in a form suitable for date field
          $scope.formattedDate = new Date($scope.voucher.Date);

          //Get expenses for this voucher
          $scope.expenses = Voucher.expenses({'id': $routeParams.voucherid});
        });
      });
    });

    $scope.isManagerViewing = true;

    $scope.cancel = function(){
      $location.path('/home/' + $routeParams.managerid);
    };

    //Perform approve or reject
    function managerAction(approve){
      if ($scope.voucher.employeeId === $routeParams.managerid){
        $scope.error = 'You can\'t approve/reject your own voucher. Ask any other manager in this organisation.';
        return;
      }
      var confirmMessage = '';
      if (approve === true){
        confirmMessage = 'About to Approve Voucher. Please confirm.';
      }else{
        confirmMessage = 'About to Reject Voucher. Please confirm.';
      }
      ModalDialogs.confirmAction(confirmMessage, function(){
        if (approve === true){
          $scope.voucher.State = voucherStates.approved;
          $scope.voucher.Approver = $routeParams.managerid;
        }else{
          $scope.voucher.State = voucherStates.draft;
        }

        $scope.voucher = Organisation.vouchers.updateById({'id': $routeParams.organisationid,
          'fk': $routeParams.voucherid}, $scope.voucher, function(){
          $location.path('/home/' + $routeParams.managerid);
        });
      });

    }

    $scope.approve = function(){
      managerAction(true);
    };

    $scope.reject = function(){
      managerAction(false);
    };

    $scope.print = function(){
      window.print();
    };

    $scope.export = function(){
      tallyUtils.exportToTallyERP9($scope.voucher, $scope.expenses, function(){
        console.log('Running callback after Export');
      });
    };

  });
