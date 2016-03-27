/**
 * @ngdoc function
 * @name expenseVouchersClientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the expenseVouchersClientApp
 */
angular.module('expenseVouchersClientApp')
  .controller('ManagerQueryVoucherCtrl', function($scope, Voucher, Organisation, $location, $routeParams, dateprovider) {

    $scope.error = '';

    function getVouchersForOrganisation() {
      $scope.vouchers = Organisation.vouchers({
        'id'    : $scope.organisation.id,
        'filter': {'where' : {
          'and' : [{'State' : $scope.voucherState},
            {'Date' : {'gte' : $scope.startDate}}, {'Date' : {'lte' : $scope.endDate}}]
        }}
      });
    }

    function setDatesForQuery(context){
      $scope.queryContext = context;
      dateprovider.setContext($scope.queryContext, new Date());
      $scope.startDate = dateprovider.getStartDate();
      $scope.endDate = dateprovider.getEndDate();
    }

    $scope.organisation = Organisation.findById({'id' : $routeParams.organisationid}, function(){
      //Set 'context' to last month by default since that would be the most frequently accessed query
      setDatesForQuery('lastMonth');
      getVouchersForOrganisation();
      $scope.name = $scope.organisation.name;
    });

    $scope.voucherState = $routeParams.voucherState;
    $scope.employeeId = $routeParams.managerid;

    $scope.changeQueryContext = function(newContext){
      $scope.queryContext = newContext;
      setDatesForQuery($scope.queryContext);
      getVouchersForOrganisation();
    };

    $scope.back = function(){
      $location.path('/home/' + $routeParams.managerid);
    }

  });
