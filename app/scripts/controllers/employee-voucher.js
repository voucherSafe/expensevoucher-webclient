'use strict';
/**
 * @ngdoc function
 * @name expenseVouchersClientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the expenseVouchersClientApp
 */
angular.module('expenseVouchersClientApp')
  .controller('EmployeeVoucherCtrl', function($scope, Voucher, Employee, Organisation, Expense, $location,
                                              $routeParams, voucherStates, $uibModal, ModalDialogs) {

    $scope.error = '';
    $scope.employee = Employee.get({'id' : $routeParams.employeeid}, function(){
      $scope.recipientDetails = $scope.employee.firstName + " " + $scope.employee.lastName + "\n"
      + $scope.employee.address;
      $scope.organisation = Organisation.get({'id' : $scope.employee.organisationId}, function(){
        //Get the voucher
        $scope.voucher = Voucher.findById({id: $routeParams.voucherid}, function(){
          //Categorize voucher state to decide action buttons
          if (($scope.voucher.State === voucherStates.draft) &&
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
          $scope.voucher.Date = new Date($scope.voucher.Date);

          //Get expenses for this voucher
          $scope.expenses = Voucher.expenses({'id': $routeParams.voucherid});
        });
      });
    });

    $scope.isManagerViewing = false;
    $scope.expensesToDelete = [];

    $scope.createNewExpense = function(){
      $scope.newExpense = new Expense();
      $scope.newExpense.Amount = {};
      $scope.newExpense.Amount.currency = 'INR';
      $scope.newExpense.Amount.major = 0;
      $scope.newExpense.Amount.minor = 0;
      //$scope.newExpense.Date = new Date();
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
      $scope.expensesToDelete.push(expenseToDelete[0]);

      //update the SlNos of the remaining expenses
      //Re-calculate the voucher total
      $scope.voucherTotalAmount = 0;
      for (var i=0; i<$scope.expenses.length; i++){
        var expenseAmount = $scope.expenses[i].Amount.major + ($scope.expenses[i].Amount.minor/100);
        $scope.expenses[i].SlNo = i+1;
        $scope.voucherTotalAmount = $scope.voucherTotalAmount + expenseAmount;
      }
    };

    $scope.cancel = function(){
      window.history.back();
      //$location.path('/home/' + $routeParams.employeeid);
    };

    function saveVoucherAndExpenses(){
      //Utility function that saves Voucher into Database
      //Picks saved Voucher's ID and saves each expense against it
      if ($scope.expenses.length === 0){
        $scope.error = 'No Expenses in Voucher. Add an expense and try again';
        return false;
      }

      if ($scope.voucher.Date === undefined || $scope.voucher.Date === null){
        $scope.error = 'Invalid Voucher Date';
        return false;
      }

      $scope.voucher.Amount = $scope.voucherTotalAmount;
      //$scope.voucher.Date = new Date($scope.formattedDate);
      $scope.voucher.ModifiedDate = new Date();

      //Update the history for action

      $scope.voucher = Employee.vouchers.updateById({'id' : $routeParams.employeeid, 'fk' : $routeParams.voucherid},
        $scope.voucher, function(){
          console.log('saved voucher id - %j', $scope.voucher.id);
          for (var i=0; i<$scope.expenses.length; i++){
            var expense = $scope.expenses[i];
            if (expense.id !== undefined && expense.id !== null){
              //Expense already present
              Voucher.expenses.updateById({'id': $scope.voucher.id, 'fk': expense.id}, expense);
            }else{
              //expense created in this view
              //The saved ID should come in to view model to avoid duplication
              $scope.expenses[i] = Voucher.expenses.create({'id': $scope.voucher.id}, expense);
            }
          }
          // console.log('no of expenses to delete: ' + $scope.expensesToDelete.length);
          // for (var k=0; k<$scope.expensesToDelete.length; k++){
          //   if ($scope.expensesToDelete[k].id !== undefined && $scope.expensesToDelete[k].id !== null){
          //     //An expenses deleted now but is present in database
          //     Voucher.expenses.destroyById({'id': $scope.voucher.id, 'fk': $scope.expensesToDelete[k].id});
          //   }
          // }
          ModalDialogs.informAction('Success. Voucher saved.', function(){
            return true;
          });
        });
    }

    $scope.datePickerOpened = false;

    $scope.dateOptions = {
      //dateDisabled: disabled,
      formatYear: 'yy',
      maxDate: new Date(), //I don't foresee a need to set a future date in any of the voucher functionality
      minDate: new Date(2016, 3, 1 ), //System introduced on 1/4/2016
      startingDay: 1
    };

    $scope.openDatePicker = function() {
      $scope.datePickerOpened = true;
    };

    $scope.format = 'dd/MM/yyyy';

    $scope.save = function(){
      saveVoucherAndExpenses();
    };

    $scope.submit = function(){
      ModalDialogs.confirmAction('Submitting Voucher... Please confirm.', function(){
        $scope.voucher.State = voucherStates.submitted;
        if (saveVoucherAndExpenses() === false){
          //Save was not successful or validation criteria failed
          $scope.voucher.State = voucherStates.draft;
        }else{
          //submit was successful. re-direct user to home directory
          $location.path('/home/' + $routeParams.employeeid);
        }
      });
    };

    $scope.print = function(){
      if ($scope.voucher.State === voucherStates.approved){
        //$scope.voucher.State = voucherStates.complete;
        //Add action to history
        $scope.voucher.History.push(voucherStates.historyObjectFactory('print', $routeParams.id, new Date()));
        //Save the voucher state
        Employee.vouchers.updateById({'id' : $routeParams.employeeid, 'fk' : $routeParams.voucherid}, $scope.voucher);
      }
      window.print();
    };

    $scope.deleteVoucher = function(){
      ModalDialogs.confirmAction('Do you want to delete this voucher and all expenses in it?', function(){
        Voucher.expenses.destroyAll({'id': $scope.voucher.id});
        Voucher.deleteById({'id' : $scope.voucher.id});
        $location.path('/home/' + $routeParams.employeeid);
      });
    };

    /*
     * Expense Creation, Deletion and Editing Modal Starts
     */
    $scope.createNewExpense = function(){
      $scope.open();
    };

    $scope.deleteExpense = function(SlNo){
      ModalDialogs.confirmAction('Do you want to delete this expense?', function(){
        //Remove the expense
        var expenseToDelete = $scope.expenses.splice(SlNo-1, 1); //SlNo is (expenses array index + 1)

        //update the SlNos of the remaining expenses &
        //Re-calculate the voucher total
        $scope.voucherTotalAmount = 0;
        for (var i=0; i<$scope.expenses.length; i++){
          var expenseAmount = $scope.expenses[i].Amount.major + ($scope.expenses[i].Amount.minor/100);
          $scope.expenses[i].SlNo = i+1;
          $scope.voucherTotalAmount = $scope.voucherTotalAmount + expenseAmount;
        }

        //delete the expense from the database if present there
        if (expenseToDelete[0].id !== undefined && expenseToDelete[0].id !== null){
              Voucher.expenses.destroyById({'id': $scope.voucher.id, 'fk': expenseToDelete[0].id});
        }

      });
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
              var allHeads = [];
              allHeads = allHeads.concat($scope.organisation.ExpenseHeads);
              allHeads = allHeads.concat($scope.employee.ExpenseHeads);
              return allHeads;
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
    //Expense Creation and Editing Modal Ends

  });
