/**
 * @ngdoc function
 * @name expenseVouchersClientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the expenseVouchersClientApp
 */
angular.module('expenseVouchersClientApp')
  .controller('CreateVoucherCtrl', function($scope, Voucher, Employee, Organisation, Expense, $location,
                                            $routeParams, voucherStates, $uibModal, ModalDialogs) {

    $scope.error = '';

    //To initialize controller elements in the New Voucher Flow
    $scope.employee = Employee.get({'id' : $routeParams.id}, function(){
      $scope.organisation = Organisation.get({'id' : $scope.employee.organisationId}, function(){

        //Initialize voucher and fixed fields
        $scope.voucher = new Voucher();
        $scope.voucher.ModifiedDate = new Date();
        $scope.voucher.organisationId = $scope.organisation.id;
        $scope.voucher.employeeId = $scope.employee.id;
        $scope.voucher.State = voucherStates.draft;

        $scope.recipientDetails = $scope.employee.firstName + " " + $scope.employee.lastName + '\n'
        + $scope.employee.address;

        $scope.expenses = [];
        $scope.voucherTotalAmount = 0;

        $scope.voucher.History = [];
        $scope.voucher.History.push(voucherStates.historyObjectFactory('create', $routeParams.id, new Date()));

      });
    });

    $scope.datePickerOpened = false;

    $scope.dateOptions = {
      //dateDisabled: disabled,
      formatYear: 'yy',
      maxDate: new Date(), //All date functionality uses today as the max
      minDate: new Date(2016, 3, 1 ), //System introduced on 1/4/2016
      startingDay: 1
    };

    $scope.openDatePicker = function() {
      $scope.datePickerOpened = true;
    };

    $scope.format = 'dd/MM/yyyy';

    $scope.cancel = function(){
      $location.path('/home/' + $routeParams.id);
    };

    function saveVoucherAndExpenses(submit){
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
      $scope.voucher.ModifiedDate = new Date(); //Set modified date to 'now'

      if (submit === true){
        $scope.voucher.History.push(voucherStates.historyObjectFactory('submit', $routeParams.id, new Date()));
      }else{
        $scope.voucher.History.push(voucherStates.historyObjectFactory('save', $routeParams.id, new Date()));
      }

      if ($scope.voucher.id === undefined){
        //saving/submitting on the first time. Create.
        $scope.voucher = Employee.vouchers.create({'id' : $routeParams.id}, $scope.voucher, function(){
          console.log('saved voucher id - %j', $scope.voucher.id);
          for (var i=0; i<$scope.expenses.length; i++){
            if ($scope.expenses[i].id === undefined){
              //update the expense object in the array index to the saved on so that the id field also gets included
              $scope.expenses[i] = Voucher.expenses.create({'id': $scope.voucher.id}, $scope.expenses[i]);
            }else{
              Voucher.expenses.updateById({'id' : $scope.voucher.id, 'fk' : $scope.expenses[i].id}, $scope.expenses[i]);
            }
          }
          ModalDialogs.informAction('Success. New Voucher created.', function(){
            //TODO refresh page
            return true;
          });
        });

      }else{
        //voucher is already saved. Update.
        Employee.vouchers.updateById({'id' : $routeParams.id, 'fk' : $scope.voucher.id}, $scope.voucher, function(){
          console.log('saved voucher id - %j', $scope.voucher.id);
          for (var i=0; i<$scope.expenses.length; i++){
            var expense = $scope.expenses[i];
            if ($scope.expenses[i].id === undefined){
              //Expense added after last save
              $scope.expenses[i] = Voucher.expenses.create({'id': $scope.voucher.id}, $scope.expenses[i]);
            }else{
              //Expense that was present in the last save`
              Voucher.expenses.updateById({'id' : $scope.voucher.id, 'fk' : $scope.expenses[i].id}, $scope.expenses[i]);
            }
          }
          ModalDialogs.informAction('Success. Voucher saved.', function(){
            //TODO refresh page
            return true;
          });
        });
      }

    }

    $scope.save = function(){
      saveVoucherAndExpenses(false); //saveOnly
    };

    $scope.submit = function(){
      ModalDialogs.confirmAction('A Voucher can\'t be edited once submitted. Please confirm.', function(){
        $scope.voucher.State = voucherStates.submitted;
        if (saveVoucherAndExpenses(true) === false){
          //Save was not successful or validation criteria failed
          $scope.voucher.State = voucherStates.draft;
        }else{
          //submit was successful. re-direct user to home page
          $location.path('/home/' + $routeParams.id);
        }
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
