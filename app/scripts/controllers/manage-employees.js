angular.module('expenseVouchersClientApp')
    .controller('ManageEmployeesCtrl', function($scope, Organisation,
                                                $location, $routeParams, ModalDialogs) {
        $scope.editableHeads = [];
        $scope.expensesModified = false;
        $scope.employees = Organisation.employees({'id' : $routeParams.organisationid}, function(){
            console.log("Employees - " + $scope.employees.length);
        });

        function setEmployeeToEdit(empIndex){
            $scope.editableHeads = [];
            $scope.employeeToEdit = $scope.employees[empIndex];
            $scope.employeeOriginal = $scope.employees[empIndex];
            if ($scope.employeeToEdit.ExpenseHeads !== undefined && $scope.employeeToEdit.ExpenseHeads.length) {
                for (var i = 0; i < $scope.employeeToEdit.ExpenseHeads.length; i++) {
                    $scope.editableHeads.push({
                        expenseHead: $scope.employeeToEdit.ExpenseHeads[i],
                        editable: false
                    });
                }
            }
        }

        $scope.selectEmployee = function(empIndex){
            if ($scope.employeeToEdit !== undefined &&
                $scope.employeeOriginal !== undefined &&
                (angular.equals($scope.employeeToEdit, $scope.employeeOriginal) === false ||
                $scope.expensesModified === true)){
                ModalDialogs.confirmAction('You have unsaved changes. Lose them?', setEmployeeToEdit(empIndex));
            }else{
                setEmployeeToEdit(empIndex);
            }

        };

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
            if (isDuplicate){
                $scope.duplicateExpenseHead = true;
                ModalDialogs.informAction('Expense Head already Exists! Please Modify or Delete.', function(){

                });
            }else{
                //reset
                $scope.duplicateExpenseHead = false;
                $scope.editableHeads[index].editable = false;
                $scope.expensesModified = true;
            }
        };

        $scope.cancel = function(){
            if ($scope.employeeToEdit !== undefined &&
                $scope.employeeOriginal !== undefined &&
                (angular.equals($scope.employeeToEdit, $scope.employeeOriginal) === false ||
                $scope.expensesModified === true)){
                ModalDialogs.confirmAction('You have unsaved changes. Lose them?', function(){
                    $location.path('/home/' + $routeParams.managerid);
                });
            }else{
                $location.path('/home/' + $routeParams.managerid);
            }

        };

        $scope.save = function(){
            ModalDialogs.confirmAction('Do you want to save the changes? Please confirm.', function(){
                $scope.employeeToEdit.ExpenseHeads = [];
                for (var j=0; j<$scope.editableHeads.length; j++){
                    $scope.employeeToEdit.ExpenseHeads.push($scope.editableHeads[j].expenseHead);
                }
                Organisation.employees.updateById({'id' : $routeParams.organisationid,
                        'fk': $scope.employeeToEdit.employeeID},
                    $scope.employeeToEdit,
                    function(){ //success
                        $scope.expensesModified = false;
                        ModalDialogs.informAction('Saved changes successfully!', function(){
                            console.log('Saved Employee with changes');
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