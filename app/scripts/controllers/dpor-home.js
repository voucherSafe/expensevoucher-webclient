/**
 * @ngdoc function
 * @name expenseVouchersClientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the expenseVouchersClientApp
 */
angular.module('expenseVouchersClientApp')
  .controller('DporHomeCtrl', function($scope, DailyProductionAndOvertimeReport, Employee, Organisation, $location, $routeParams, voucherStates) {


    //Manager's functionality - Elements in the Manager's corner in the view
    $scope.orgSubmittedDpors = [];

    function getDporsForOrganisation(){
      $scope.orgSubmittedDpors = Organisation.dailyProductionAndOvertimeReports({'id' : $scope.organisation.id,
        'filter' : {'where': {'State' : voucherStates.submitted}, 'order': 'ModifiedDate DESC', 'limit':5}}, function(){
      });
    }

    $scope.error = '';
    $scope.employee = Employee.get({'id' : $routeParams.id}, function(){
      console.log('Employee is %j', $scope.employee);
      $scope.organisation = Organisation.get({'id' : $scope.employee.organisationId}, function(){
        if ($scope.employee.isManager){
          getDporsForOrganisation();
        }
      });
    });

    $scope.activeDpors = Employee.dailyProductionAndOvertimeReports({'id' : $routeParams.id,
      'filter' : {'where': {'State' : voucherStates.draft}, 'order': 'ModifiedDate DESC', 'limit':5}}, function(){
      console.log('%j', $scope.activeDpors);
    });

    $scope.approvedDpors = Employee.dailyProductionAndOvertimeReports({'id' : $routeParams.id,
      'filter' : {'where': {'State' : voucherStates.approved}, 'order': 'ModifiedDate DESC', 'limit':5}}, function(){
      console.log('%j', $scope.approvedDpors);
    });

    $scope.employeeDporQuery = function(voucherState){
      $location.path('/employee/' + $routeParams.id + '/dpors/' + voucherState);
    };

    $scope.newDpor = function(){
      $location.path('/employee/' + $routeParams.id + '/dpor/create');
    };

    $scope.logout = function(){
      Employee.logout(function(){
        $location.path('/');
      });
    };

  });
