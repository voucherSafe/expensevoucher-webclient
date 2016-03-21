'use strict';
/**
 * @ngdoc function
 * @name expenseVouchersClientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the expenseVouchersClientApp
 */
angular.module('expenseVouchersClientApp')
  .controller('EmployeeVoucherCtrl', function($scope, $filter, Voucher, Employee, Organisation, Expense, $location, $routeParams, voucherStates) {

    $scope.error = '';
    $scope.employee = Employee.get({'id' : $routeParams.employeeid}, function(){
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

          //Date in a form suitable for date field
          $scope.formattedDate = new Date($scope.voucher.Date);

          //Get expenses for this voucher
          $scope.expenses = Voucher.expenses({'id': $routeParams.voucherid});
        });
      });
    });

    $scope.createNewExpense = function(){
      $scope.newExpense = new Expense();
      $scope.newExpense.Amount = {};
      $scope.newExpense.Amount.currency = 'INR';
      $scope.newExpense.Amount.major = 0;
      $scope.newExpense.Amount.minor = 0;
      $scope.newExpense.Date = new Date();
      $scope.showExpensePopover = true;
      $scope.newExpense.SlNo = $scope.expenses.length + 1;
      console.log('You clicked Add new Expense');
    };

    $scope.addNewExpense = function(){
      $scope.expenses.push($scope.newExpense);
      $scope.showExpensePopover = false;
      //Calculate the new total Amount for Voucher
      var expenseAmount = $scope.newExpense.Amount.major + ($scope.newExpense.Amount.minor/100);
      $scope.voucherTotalAmount = $scope.voucherTotalAmount + expenseAmount;
    };

    $scope.cancelNewExpense = function(){
      $scope.showExpensePopover = false;
    };

    $scope.expensePopover = {
      templateUrl: 'myPopoverTemplate.html',
      title: 'Enter your Expense details'
    };

    $scope.cancel = function(){
      $location.path('/home/' + $routeParams.employeeid);
    };

    function saveVoucherAndExpenses(){
      //Utility function that saves Voucher into Database
      //Picks saved Voucher's ID and saves each expense against it
      if ($scope.expenses.length === 0){
        $scope.error = 'No Expenses in Voucher. Add an expense and try again';
        return;
      }
      $scope.voucher.Amount = $scope.voucherTotalAmount;
      $scope.voucher.Date = new Date($scope.formattedDate);
      $scope.voucher = Employee.vouchers.updateById({'id' : $routeParams.employeeid, 'fk' : $routeParams.voucherid},
        $scope.voucher, function(err, voucher){
          if (err){
            $scope.error = 'Unable to save voucher. Check network settings and try again later.';
          }
          console.log('saved voucher id - %j', $scope.voucher.id);
          $location.path('/home/' + $routeParams.employeeid);
          //for (var i=0; i<$scope.expenses.length; i++){
          //  var expense = $scope.expenses[i];
          //  Voucher.expenses.create({'id': $scope.voucher.id}, expense, function(err){
          //    if (err){
          //      $scope.error = 'Unable to save. Check network settings and try again later.'
          //    }
          //  });
          //}
        });
    }

    $scope.save = function(){
      saveVoucherAndExpenses();
    };

    $scope.submit = function(){
      $scope.voucher.State = voucherStates.submitted;
      saveVoucherAndExpenses();
    };

    $scope.print = function(){
      window.print();
    };

  });
