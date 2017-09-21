'use strict';
angular.module('expenseVouchersClientApp')
  .controller('ManagerQueryDporCtrl', function($scope, DailyProductionAndOvertimeReport, Organisation, $location,
                                                  $routeParams, dateprovider) {

    $scope.error = '';

    function getDporsForOrganisation() {
      $scope.dpors = Organisation.dailyProductionAndOvertimeReports({
        'id'    : $scope.organisation.id,
        'filter': {'where' : {
            'and'   : [{'State' : $scope.dporState},
                       {'Date' : {'gte' : $scope.startDate}}, {'Date' : {'lte' : $scope.endDate}}]
                  },
                  'order' : 'Date ASC'}
        }, function(){

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

    $scope.dporState = $routeParams.dporState;
    $scope.employeeId = $routeParams.managerid;

    $scope.organisation = Organisation.findById({'id' : $routeParams.organisationid}, function(){
      //Set 'context' to last month by default since that would be the most frequently accessed query
      setDatesForQuery('currentMonth');
      $scope.name = $scope.organisation.name;
      getDporsForOrganisation();
    });

    $scope.changeQueryContext = function(newContext){
      $scope.queryContext = newContext;
      setDatesForQuery($scope.queryContext);
      getDporsForOrganisation();
    };

    $scope.back = function(){
      $location.path('/dpor/home/' + $routeParams.managerid);
    };

    $scope.show = function(dpor){
      console.log('Dpor is %j', dpor);
      console.log('path is ' + '/organisation/' + $routeParams.organisationid +
      '/manager/' + $routeParams.managerid + '/employee/' + dpor.employeeId +
      '/dpor/' + dpor.id);
      $location.path('/organisation/' + $routeParams.organisationid +
      '/manager/' + $routeParams.managerid + '/employee/' + dpor.employeeId +
      '/dpor/' + dpor.id);
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
      minDate: new Date(2017, 8, 1 ), //System introduced on 1/9/2017
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
      getDporsForOrganisation();

    };
    //Custom dates functions complete


  });
