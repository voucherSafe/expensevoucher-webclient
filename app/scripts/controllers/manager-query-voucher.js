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

  });
