/**
 * @ngdoc function
 * @name expenseVouchersClientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the expenseVouchersClientApp
 */
angular.module('expenseVouchersClientApp')
  .controller('EmployeeQueryVoucherCtrl', function($scope, Voucher, Employee, $location,
                                                   $routeParams, dateprovider, voucherStates) {

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
    };

    $scope.isVoucherActive = function(voucher){
      if (voucher.State === voucherStates.draft){
        return true;
      }
    };

    $scope.deleteVoucher = function(voucher){
      //Delete expenses one by one
      Voucher.expenses.destroyAll({'id': voucher.id});
      Voucher.deleteById({'id' : voucher.id});
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
      getVouchersForEmployee();

    };
    //Custom dates functions complete

  });
