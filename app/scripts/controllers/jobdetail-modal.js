angular.module('expenseVouchersClientApp').controller('JobDetailModalInstanceCtrl',
  function ($scope, $uibModalInstance, Jobdetail, jobDetail) {

  //Initialize new jobDetail fields
  $scope.jobDetail = jobDetail;
  $scope.isNew = false;

  if ($scope.jobDetail == undefined || $scope.jobDetail === null){
    $scope.isNew = true;
    $scope.jobDetail = new Jobdetail();
    $scope.jobDetail.amount = 0;
  }else{
    //nothing to initialise, an existing expense is being edited
  }

  $scope.ok = function () {
    $uibModalInstance.close({'jobDetail' : $scope.jobDetail, 'isNew' : $scope.isNew});
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});
