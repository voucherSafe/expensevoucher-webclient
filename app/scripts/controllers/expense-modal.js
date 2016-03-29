angular.module('expenseVouchersClientApp').controller('ExpenseModalInstanceCtrl', function ($scope, $uibModalInstance, Expense, expense, voucherDate) {

  //Initialize new Expense fields
  $scope.expense = expense;
  $scope.Date = voucherDate;
  $scope.isNew = false;

  if ($scope.expense == undefined || $scope.expense === null){
    $scope.isNew = true;
    $scope.expense = new Expense();
    $scope.expense.Amount = {};
    $scope.expense.Amount.currency = 'INR';
    $scope.expense.Amount.major = 0;
    $scope.expense.Amount.minor = 0;
    $scope.expense.Date = new Date($scope.Date);
  }else{
    //nothing to initialise, an existing expense is being edited
  }


  $scope.ok = function () {
    $uibModalInstance.close({'expense' : $scope.expense, 'isNew' : $scope.isNew});
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});
