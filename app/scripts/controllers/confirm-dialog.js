angular.module('expenseVouchersClientApp').controller('ConfirmationDialogController',
  function ($scope, $uibModalInstance, message) {

  $scope.confirmationMessage = message;
  $scope.selection = false;

  $scope.ok = function () {
    $scope.selection = true;
    $uibModalInstance.close({selection: $scope.selection});
  };

  $scope.cancel = function () {
    $scope.selection = false;
    $uibModalInstance.dismiss('Cancel');
  };
});
