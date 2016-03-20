angular.module('expenseVouchersClientApp').controller('InformationDialogController',
  function ($scope, $modalInstance, message) {

  $scope.informationMessage = message;
  $scope.selection = {confirm: false};

  $scope.ok = function () {
    $scope.selection.confirm = true;
    $modalInstance.close($scope.selection);
  };

  $scope.cancel = function () {
    $scope.selection.confirm = false;
    $modalInstance.dismiss('Cancel');
  };
});
