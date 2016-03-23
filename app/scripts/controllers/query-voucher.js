/**
 * @ngdoc function
 * @name expenseVouchersClientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the expenseVouchersClientApp
 */
angular.module('expenseVouchersClientApp')
.controller('QueryVoucherCtrl', function($scope, Voucher, Organisation, $location, $routeParams, dateprovider) {

    $scope.error = '';

    $scope.organisation = Organisation.findById({'id' : $routeParams.organisationid});
    $scope.voucherState = $routeParams.voucherState;
    //Set 'context' to last month by default since that would be the most frequently accessed query
    $scope.queryContext = 'lastMonth';

    dateprovider.setContext($scope.queryContext);

    //Manager's functionality - Elements in the Manager's corner in the view
    $scope.orgSubmittedVouchers = [];

/*    function getVouchersForOrganisation(){
      $scope.orgVouchers = Organisation.vouchers({'id' : $scope.organisation.id}, function(){
        for(var k=0; k<$scope.orgVouchers.length; k++){
          if ($scope.orgVouchers[k].State === voucherStates.submitted){
            $scope.orgSubmittedVouchers.push($scope.orgVouchers[k]);
          }
        }
      });
    }*/

    $scope.startDate = dateprovider.getStartDate();
    $scope.endDate = dateprovider.getEndDate();

    $scope.logout = function(){
      Employee.logout(function(){
        $location.path('/');
      });

    }
  });
