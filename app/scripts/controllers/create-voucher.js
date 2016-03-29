/**
 * @ngdoc function
 * @name expenseVouchersClientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the expenseVouchersClientApp
 */
angular.module('expenseVouchersClientApp')
  .controller('CreateVoucherCtrl', function($scope, Voucher, Employee, Organisation, Expense, $location,
                                            $routeParams, voucherStates, $uibModal) {

    $scope.error = '';

    //To initialize controller elements in the New Voucher Flow
    $scope.employee = Employee.get({'id' : $routeParams.id}, function(){
      $scope.organisation = Organisation.get({'id' : $scope.employee.organisationId}, function(){

        //Initialize voucher and fixed fields
        $scope.voucher = new Voucher();
        $scope.voucher.organisationId = $scope.organisation.id;
        $scope.voucher.employeeId = $scope.employee.id;
        $scope.voucher.State = voucherStates.draft;

        $scope.recipientDetails = $scope.employee.firstName + " " + $scope.employee.lastName + '\n'
        + $scope.employee.address;

        $scope.expenses = [];
        $scope.voucherTotalAmount = 0;

      });
    });

    $scope.cancel = function(){
      $location.path('/home/' + $routeParams.id);
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
      $scope.voucher = Employee.vouchers.create({'id' : $routeParams.id}, $scope.voucher, function(){
        console.log('saved voucher id - %j', $scope.voucher.id);
        for (var i=0; i<$scope.expenses.length; i++){
          var expense = $scope.expenses[i];
          Voucher.expenses.create({'id': $scope.voucher.id}, expense);
        }
        return true;
      });
    }

    $scope.save = function(){
      saveVoucherAndExpenses();
    };

    $scope.submit = function(){
      $scope.voucher.State = voucherStates.submitted;
      if (saveVoucherAndExpenses() === false){
        //Save was not successful or validation criteria failed
        $scope.voucher.State = voucherStates.draft;
      }else{
        //submit was successful. re-direct user to home directory
        $location.path('/home/' + $routeParams.id);
      }
    };

    /*
     * Expense Creation, Deletion and Editing Modal Starts
     */

    $scope.createNewExpense = function(){
      $scope.open();
    };

    $scope.deleteExpense = function(SlNo){
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
