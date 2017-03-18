angular.module('expenseVouchersClientApp')
    .controller('EditOrganisationCtrl', function($scope, Organisation,
                                                 $location, $routeParams, ModalDialogs) {
        $scope.organisation = Organisation.get({'id' : $routeParams.organisationid}, function() {

        });

        $scope.managerid = $routeParams.managerid;

        $scope.createNewExpenseHead = function(){
            $scope.organisation.ExpenseHeads.unshift('New Expense Head - Edit me');
        };

        $scope.removeExpenseHead = function(head){
            ModalDialogs.confirmAction('Do you want to delete this expense head?', function() {
                //locate the expense head to remove
                var index = $scope.organisation.ExpenseHeads.indexOf(head);
                $scope.organisation.ExpenseHeads.splice(index, 1);
            });
        };

        $scope.cancel = function(){
            $location.path('/organisation/' + $routeParams.organisationid + '/manager/' +
            $scope.managerid + '/view');
        };

        $scope.save = function(){
            ModalDialogs.confirmAction('Saving changes... Please confirm.', function(){
                $scope.organisation = Organisation.prototype$updateAttributes({'id' : $routeParams.organisationid},
                    { properties: $scope.organisation.properties,
                      ExpenseHeads: $scope.organisation.ExpenseHeads },
                        function(){ //success
                        console.log('Saved organisation with changes');
                    }, function(){ //error
                        console.log('Error while saving');
                    }
                );
            });
        };
    });