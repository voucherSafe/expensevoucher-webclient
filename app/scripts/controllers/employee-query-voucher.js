/**
 * @ngdoc function
 * @name expenseVouchersClientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the expenseVouchersClientApp
 */
angular.module('expenseVouchersClientApp')
  .controller('EmployeeQueryVoucherCtrl', function($scope, Voucher, Employee, $location, $routeParams, dateprovider) {

    $scope.error = '';

    function getVouchersForEmployee() {
      $scope.vouchers = Employee.vouchers({
        'id'    : $routeParams.employeeid,
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

    $scope.employee = Employee.findById({'id' : $routeParams.employeeid}, function(){
      //Set 'context' to last month by default since that would be the most frequently accessed query
      setDatesForQuery('currentMonth');
      getVouchersForEmployee();
      $scope.name = $scope.employee.firstName + ' ' + $scope.employee.lastName;
    });

    $scope.voucherState = $routeParams.voucherState;
    $scope.employeeId = $routeParams.employeeid;

    $scope.changeQueryContext = function(newContext){
      $scope.queryContext = newContext;
      setDatesForQuery($scope.queryContext);
      getVouchersForEmployee();
    };

    $scope.show = function(voucher){
      $location.path('/employee/' + $routeParams.employeeid + '/voucher/' + voucher.id);
    };

    $scope.back = function(){
      $location.path('/home/' + $routeParams.employeeid);
    }

  });
