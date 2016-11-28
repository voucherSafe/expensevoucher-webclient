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
                                             $location, $routeParams, voucherStates, tallyUtils, $uibModal, ModalDialogs) {

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

          //Date in a form suitable for date field. Date property is a string in the database
          $scope.voucher.Date = new Date($scope.voucher.Date);

          //Get expenses for this voucher
          $scope.expenses = Voucher.expenses({'id': $routeParams.voucherid});
        });
      });
    });

    $scope.isManagerViewing = true;

    $scope.cancel = function(){
      window.history.back();
      //$location.path('/home/' + $routeParams.managerid);
    };

    $scope.editExpense = function(SlNo){
      $scope.open($scope.expenses[SlNo - 1]);
    };

    $scope.open = function (expense) {
      var modalInstance = $uibModal.open({
        animation: true,
        templateUrl: 'ExpenseModal.html',
        controller: 'ExpenseModalInstanceCtrl',
        resolve: {
          expense: function () {
            return expense;
          },
          heads: function () {
            return $scope.organisation.ExpenseHeads;
          },
          voucherDate: function() {
            return $scope.voucher.Date;
          }
        }
      });
      modalInstance.result.then(function (result) {
        if (result.isNew === true){ //Push new expense into array
          $scope.newExpense = result.expense;
          $scope.newExpense.SlNo = $scope.expenses.length+1;
          $scope.expenses.push($scope.newExpense);
        }

        //Recalculate new voucher total
        $scope.voucherTotalAmount = 0;
        for (var k=0; k < $scope.expenses.length; k++){
          var expenseAmount = $scope.expenses[k].Amount.major + ($scope.expenses[k].Amount.minor/100);
          $scope.voucherTotalAmount = $scope.voucherTotalAmount + expenseAmount;
        }

      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
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
          $scope.voucher.History.push(voucherStates.historyObjectFactory('approve', $routeParams.managerid, new Date()));
        }else{
          $scope.voucher.State = voucherStates.draft;
          $scope.voucher.History.push(voucherStates.historyObjectFactory('reject', $routeParams.managerid, new Date()));
        }
        $scope.voucher.ModifiedDate = new Date();

        $scope.voucher = Organisation.vouchers.updateById({'id': $routeParams.organisationid,
          'fk': $routeParams.voucherid}, $scope.voucher, function(){
            //Update expenses in case the manager has changed expense heads
            for (var i=0; i<$scope.expenses.length; i++){
              var expense = $scope.expenses[i];
              if (expense.id !== undefined && expense.id !== null){
                //Expense already present
                Voucher.expenses.updateById({'id': $scope.voucher.id, 'fk': expense.id}, expense);
              }
            }
          $location.path('/home/' + $routeParams.managerid);
        });
      });
    }

    $scope.datePickerOpened = false;

    $scope.dateOptions = {
      dateDisabled: 'disabled',
      formatYear: 'yy',
      maxDate: new Date(), //I don't foresee a need to set a future date in any of the voucher functionality
      minDate: new Date(2016, 3, 1 ), //System introduced on 1/4/2016
      startingDay: 1
    };

    $scope.openDatePicker = function() {
      //No voucher fields should be editable when the manager is viewing it
      //$scope.datePickerOpened = true;
    };

    $scope.format = 'dd/MM/yyyy';

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
