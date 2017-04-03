angular.module('expenseVouchersClientApp')
    .controller('EditOrganisationCtrl', function($scope, Organisation,
                                                 $location, $routeParams, ModalDialogs) {
        $scope.editableHeads = [];
        $scope.organisation = Organisation.get({'id' : $routeParams.organisationid}, function() {
            for (var i=0; i<$scope.organisation.ExpenseHeads.length; i++){
                $scope.editableHeads.push({expenseHead: $scope.organisation.ExpenseHeads[i],
                    editable: false});
            }
        });

        $scope.managerid = $routeParams.managerid;

        $scope.createNewExpenseHead = function(){
            $scope.editableHeads.unshift({expenseHead:'New Expense Head - Edit me', editable: true});
        };

        $scope.removeExpenseHead = function(index){
            ModalDialogs.confirmAction('Do you want to delete this expense head ' +
                $scope.editableHeads[index].expenseHead + '?', function() {
                $scope.editableHeads.splice(index, 1);
            });
        };

        $scope.makeHeadEditable = function(index){
            $scope.editableHeads[index].editable = true;
        };

        function checkDuplicateHeads(value){
            var tempHeads = [];
            for (var k=0; k<$scope.editableHeads.length; k++){
                tempHeads.push($scope.editableHeads[k].expenseHead);
            }
            var firstIndex = tempHeads.indexOf(value);
            var lastIndex = tempHeads.lastIndexOf(value);
            if (firstIndex === lastIndex){
                return false;
            }else{
                return true;
            }
        }

        $scope.commitExpenseHead = function(index){
            //check whether it's duplicate, alert if it is
            var isDuplicate = checkDuplicateHeads($scope.editableHeads[index].expenseHead);
            if (isDuplicate){ //TODO logic for duplicate
                $scope.duplicateExpenseHead = true;
                ModalDialogs.informAction('Expense Head already Exists! Please Modify or Delete.', function(){

                });
            }else{
               //reset
                $scope.duplicateExpenseHead = false;
                $scope.editableHeads[index].editable = false;
            }
        };

        $scope.cancel = function(){
            $location.path('/organisation/' + $routeParams.organisationid + '/manager/' +
            $scope.managerid + '/view');
        };

        $scope.save = function(){
            ModalDialogs.confirmAction('Do you want to save the changes? Please confirm.', function(){
                $scope.organisation.ExpenseHeads = [];
                for (var j=0; j<$scope.editableHeads.length; j++){
                    $scope.organisation.ExpenseHeads.push($scope.editableHeads[j].expenseHead);
                }
                $scope.organisation = Organisation.prototype$updateAttributes({'id' : $routeParams.organisationid},
                    { properties: $scope.organisation.properties,
                      ExpenseHeads: $scope.organisation.ExpenseHeads },
                        function(){ //success
                            ModalDialogs.informAction('Saved changes successfully!', function(){
                                console.log('Saved organisation with changes');
                            });
                    }, function(){ //error
                        ModalDialogs.informAction('Error: Unable to Save Changes! Please try later.', function(){
                            console.log('unable to save');
                        });
                    }
                );
            });
        };
    });