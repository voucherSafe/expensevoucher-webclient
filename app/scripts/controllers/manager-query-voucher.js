/**
 * @ngdoc function
 * @name expenseVouchersClientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the expenseVouchersClientApp
 */
angular.module('expenseVouchersClientApp')
  .controller('ManagerQueryVoucherCtrl', function($scope, Voucher, Organisation, $location,
                                                  $routeParams, dateprovider, tallyUtils) {

    $scope.error = '';

    function getVouchersForOrganisation() {
      $scope.vouchers = Organisation.vouchers({
        'id'    : $scope.organisation.id,
        'filter': {'where' : {
          'and' : [{'State' : $scope.voucherState},
            {'Date' : {'gte' : $scope.startDate}}, {'Date' : {'lte' : $scope.endDate}}]
        }}
      }, function(){
        //Prepare the Tally XML Templates
        tallyUtils.initializeTemplates(function(){
          console.log('Loaded Templates...');
          //Create the Tally XML String for the current context
          tallyUtils.createTallyXMLString($scope.vouchers, $scope.organisation, function(tallyXMLString){
            console.log('Created Tally XML String');
            var tallyXMLContent = tallyXMLString;
            var blob = new Blob([ tallyXMLContent ], { type : 'text/plain' });
            $scope.tallyXMLURL = (window.URL || window.webkitURL).createObjectURL( blob );
          });
        });
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
      $scope.name = $scope.organisation.name;
      getVouchersForOrganisation();
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
    };

    $scope.show = function(voucher){
      console.log('Voucher is %j', voucher);
      console.log('path is ' + '/organisation/' + $routeParams.organisationid +
      '/manager/' + $routeParams.managerid + '/employee/' + voucher.employeeId +
      '/voucher/' + voucher.id);
      $location.path('/organisation/' + $routeParams.organisationid +
      '/manager/' + $routeParams.managerid + '/employee/' + voucher.employeeId +
      '/voucher/' + voucher.id);
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
      getVouchersForOrganisation();

    };
    //Custom dates functions complete


  });
