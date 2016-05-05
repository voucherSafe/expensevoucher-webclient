angular.module('expenseVouchersClientApp').controller('ExpenseModalInstanceCtrl',
  function ($scope, $uibModalInstance, Expense, expense, heads) {

  //Initialize new Expense fields
  $scope.expense = expense;
  $scope.isNew = false;
  $scope.heads = heads; //List of Expense Heads for the organisation

  if ($scope.expense == undefined || $scope.expense === null){
    $scope.isNew = true;
    $scope.expense = new Expense();
    $scope.expense.Amount = {};
    $scope.expense.Amount.currency = 'INR';
    $scope.expense.Amount.major = 0;
    $scope.expense.Amount.minor = 0;
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
