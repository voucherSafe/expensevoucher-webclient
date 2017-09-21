angular.module('expenseVouchersClientApp')
  .controller('EmployeeQueryDporCtrl', function($scope, DailyProductionAndOvertimeReport, Employee, $location,
                                                   $routeParams, dateprovider, voucherStates) {

    $scope.error = '';

    function getDporsForEmployee() {
      $scope.dpors = Employee.dailyProductionAndOvertimeReports({
        'id'    : $routeParams.employeeid,
        'filter': {'where' : {
                    'and' : [{'State' : $scope.dporState},
                             {'Date' : {'gte' : $scope.startDate}}, {'Date' : {'lte' : $scope.endDate}}]
                  },
        'order' : 'Date ASC' }
      });
    }

    function setDatesForQuery(context){
      $scope.queryContext = context;

      //Always use 0:0:0.000 as time
      var currentDate = new Date();
      currentDate.setHours(0,0,0,0);

      dateprovider.setContext($scope.queryContext, currentDate);
      $scope.startDate = dateprovider.getStartDate();
      $scope.endDate = dateprovider.getEndDate();
    }

    $scope.employee = Employee.findById({'id' : $routeParams.employeeid}, function(){
      //Set 'context' to last month by default since that would be the most frequently accessed query
      setDatesForQuery('currentMonth');
      getDporsForEmployee();
      $scope.name = $scope.employee.firstName + ' ' + $scope.employee.lastName;
    });

    $scope.dporState = $routeParams.dporState;
    $scope.employeeId = $routeParams.employeeid;

    $scope.changeQueryContext = function(newContext){
      $scope.queryContext = newContext;
      setDatesForQuery($scope.queryContext);
      getDporsForEmployee();
    };

    $scope.show = function(dpor){
      $location.path('/employee/' + $routeParams.employeeid + '/dpor/' + dpor.id);
    };

    $scope.back = function(){
      $location.path('/dpor/home/' + $routeParams.employeeid);
    };

    $scope.isDporActive = function(dpor){
      if (dpor.State === voucherStates.draft){
        return true;
      }
    };

    $scope.deleteDpor = function(dpor){
      //Delete expenses one by one
      DailyProductionAndOvertimeReport.expenses.destroyAll({'id': dpor.id});
      DailyProductionAndOvertimeReport.deleteById({'id' : dpor.id});
    };

    //Date picker and functions for custom dates
    $scope.datePickerPopover = {
      templateUrl: 'DatePickerTemplate.html',
      title: 'Select From and To Dates'
    };

    $scope.fromDatePickerOpened = false;
    $scope.toDatePickerOpened = false;

    $scope.dateOptions = {
      //dateDisabled: disabled,
      formatYear: 'yy',
      maxDate: new Date(), //I don't foresee a need to set a future date in any of the voucher functionality
      minDate: new Date(2016, 3, 1 ), //System introduced on 1/4/2016
      startingDay: 1
    };

    $scope.openFromDatePicker = function() {
      $scope.fromDatePickerOpened = true;
    };

    $scope.openToDatePicker = function() {
      $scope.toDatePickerOpened = true;
    };

    $scope.format = 'dd/MM/yyyy';

    $scope.selectFromToDates = function(){
      $scope.fromDatePickerOpened = false;
      $scope.toDatePickerOpened = false;

       //close the popover
      $scope.openDatePickerPopover = false;
      //refresh
      $scope.queryContext = 'custom';
      getDporsForEmployee();

    };
    //Custom dates functions complete

  });
