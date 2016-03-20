/**
 * @ngdoc function
 * @name expenseVouchersClientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the expenseVouchersClientApp
 */
angular.module('expenseVouchersClientApp')
.controller('CreateVoucherCtrl', function($scope, Voucher, Employee, Organisation, Expense, $location,
                                          $routeParams, voucherStates) {

    $scope.error = '';

    //To initialize controller elements in the New Voucher Flow
    $scope.employee = Employee.get({'id' : $routeParams.id}, function(){
      $scope.organisation = Organisation.get({'id' : $scope.employee.organisationId}, function(){

        //Initialize voucher and fixed fields
        $scope.voucher = new Voucher();
        $scope.voucher.organisationId = $scope.organisation.id;
        $scope.voucher.employeeId = $scope.employee.id;
        $scope.voucher.State = voucherStates.draft;

        $scope.recipientDetails = $scope.employee.firstName + " " + $scope.employee.lastName + "\n"
        + $scope.employee.address;

        $scope.expenses = [];
        $scope.voucherTotalAmount = 0;

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
      $location.path('/home/' + $routeParams.id);
    };

    function displayInfoModal(){
      var informationDialogModalInstance = $modal.open({
         animation: true,
         templateUrl: 'InformationDialogModal.html',
         controller: 'InformationDialogController',
         size: 'sm',
         resolve: {
           message: function () {
             return 'Voucher Saved Successfully.';
           }
         }
       });

       confirmationDialogModalInstance.result.then(function (result) {
         console.log('result is ' + result);
         //Take an action depending on user's confirmation
         if (result.confirm === true){
           if ( spec ) {
             spec.$remove();
             for (var i in $scope.specs) {
               if ($scope.specs [i] === spec) {
                 $scope.specs.splice(i, 1);
               }
             }
           } else {
             $scope.spec.$remove(function() {
               $location.path('specs');
             });
           }
         }
       }, function () {
         console.info('Modal dismissed at: ' + new Date());
       });
    }

    function saveVoucherAndExpenses(){
      //Utility function that saves Voucher into Database
      //Picks saved Voucher's ID and saves each expense against it
      if ($scope.expenses.length === 0){
        $scope.error = 'No Expenses in Voucher. Add an expense and try again';
        return;
      }
      $scope.voucher.Amount = $scope.voucherTotalAmount;
      $scope.voucher = Employee.vouchers.create({'id' : $routeParams.id}, $scope.voucher, function(err, voucher){
        if (err){
          $scope.error = 'Unable to save voucher. Check network settings and try again later.'
        }
        console.log('saved voucher id - %j', $scope.voucher.id);
        for (var i=0; i<$scope.expenses.length; i++){
          var expense = $scope.expenses[i];
          Voucher.expenses.create({'id': $scope.voucher.id}, expense, function(err){
            if (err){
              $scope.error = 'Unable to save. Check network settings and try again later.'
            }else{
              displayInfoModal();
            }
          });
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

  });
