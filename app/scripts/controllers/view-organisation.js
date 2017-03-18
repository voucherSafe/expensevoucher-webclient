angular.module('expenseVouchersClientApp')
    .controller('ViewOrganisationCtrl', function($scope, Voucher, Employee, Organisation,
                                                 $location, $routeParams) {
        $scope.organisation = Organisation.get({'id' : $routeParams.organisationid}, function() {

        });

        $scope.managerid = $routeParams.managerid;

        $scope.cancel = function(){
            $location.path('/home/' + $scope.managerid);
        };
    });