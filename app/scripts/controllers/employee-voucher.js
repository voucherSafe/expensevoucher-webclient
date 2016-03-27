'use strict';
/**
 * @ngdoc function
 * @name expenseVouchersClientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the expenseVouchersClientApp
 */
angular.module('expenseVouchersClientApp')
  .controller('EmployeeVoucherCtrl', function($scope, Voucher, Employee, Organisation, Expense, $location, $routeParams, voucherStates) {

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
      //$scope.displayExpensePopover = true;
      console.log('show popover to true');
      $scope.newExpense.SlNo = $scope.expenses.length + 1;
      console.log('You clicked Add new Expense');
    };

    $scope.addNewExpense = function(){
      $scope.expenses.push($scope.newExpense);
      console.log('setting popover to false in add');
      //$scope.displayExpensePopover = false;
      //Calculate the new total Amount for Voucher
      var expenseAmount = $scope.newExpense.Amount.major + ($scope.newExpense.Amount.minor/100);
      $scope.voucherTotalAmount = $scope.voucherTotalAmount + expenseAmount;
    };

    $scope.deleteExpense = function(SlNo){
      //Note: SlNo is (expenses array index + 1)
      //Remove the expense
      var expenseToDelete = $scope.expenses.splice(SlNo-1, 1);
      if (expenseToDelete[0].id !== undefined && expenseToDelete[0].id !== null){
        //This is an expense received from the database and not added in this session
        //expenseToDelete.deleteById({'id':expenseToDelete.id});
        Voucher.expenses.destroyById({'id': $scope.voucher.id, 'fk': expenseToDelete[0].id});
      }

      //update the SlNos of the remaining expenses
      //Re-calculate the voucher total
      $scope.voucherTotalAmount = 0;
      for (var i=0; i<$scope.expenses.length; i++){
        var expenseAmount = $scope.expenses[i].Amount.major + ($scope.expenses[i].Amount.minor/100);
        $scope.expenses[i].SlNo = i+1;
        $scope.voucherTotalAmount = $scope.voucherTotalAmount + expenseAmount;
      }
    };

    $scope.editExpense = function(SlNo){
      $scope.expenseEditMode = true;
      $scope.newExpense = $scope.expenses[SlNo - 1];
      $scope.displayExpensePopover = true;
      $scope.newExpense.Date = new Date($scope.newExpense.Date);
      console.log('show popover to true');
    };

    $scope.cancelNewExpense = function(){
      $scope.expenseEditMode = false;
      console.log('setting popover to false in cancel');
      //$scope.displayExpensePopover = false;
    };

    $scope.expensePopover = {
      templateUrl: 'EditExpensePopoverTemplate.html',
      title: 'Expense details'
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
          for (var i=0; i<$scope.expenses.length; i++){
            var expense = $scope.expenses[i];
            if (expense.id !== undefined && expense.id != null){
              //Expense already present
              Voucher.expenses.updateById({'id': $scope.voucher.id, 'fk': expense.id}, expense);
            }else{
              //expense created in this view
              Voucher.expenses.create({'id': $scope.voucher.id}, expense);
            }
          }
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
