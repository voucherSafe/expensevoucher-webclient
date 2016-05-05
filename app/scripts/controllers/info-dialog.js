angular.module('expenseVouchersClientApp').controller('InformationDialogController',
  function ($scope, $uibModalInstance, message) {

  $scope.informationMessage = message;

  $scope.ok = function () {
    $uibModalInstance.close($scope.selection);
  };

});
