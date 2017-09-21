angular.module('expenseVouchersClientApp')
  .controller('CreateDporCtrl', function($scope, DailyProductionAndOvertimeReport, Employee, Organisation, Jobdetail, $location,
                                            $routeParams, voucherStates, $uibModal, ModalDialogs) {

    //Reusing VoucherStates service as is for DPOR as well as they are one and the same

        $scope.error = '';

    //To initialize controller elements in the New DPOR Flow
    $scope.employee = Employee.get({'id' : $routeParams.id}, function(){
      $scope.organisation = Organisation.get({'id' : $scope.employee.organisationId}, function(){

        //Initialize report (aka dpor) and fixed fields
        $scope.dpor = new DailyProductionAndOvertimeReport();
        $scope.dpor.ModifiedDate = new Date();
        $scope.dpor.organisationId = $scope.organisation.id;
        $scope.dpor.employeeId = $scope.employee.id;
        $scope.dpor.State = voucherStates.draft;

        $scope.recipientDetails = $scope.employee.firstName + " " + $scope.employee.lastName + '\n'
        + $scope.employee.address;

        $scope.jobDetails = [];

        $scope.dpor.History = [];
        $scope.dpor.History.push(voucherStates.historyObjectFactory('create', $routeParams.id, new Date()));

      });
    });

    $scope.datePickerOpened = false;

    $scope.dateOptions = {
      //dateDisabled: disabled,
      formatYear: 'yy',
      maxDate: new Date(), //All date functionality uses today as the max
      minDate: new Date(2017, 8, 1 ), //System introduced on 1/Sep/2017
      startingDay: 1
    };

    $scope.openDatePicker = function() {
      $scope.datePickerOpened = true;
    };

    $scope.format = 'dd/MM/yyyy';

    $scope.cancel = function(){
      $location.path('/dpor/home/' + $routeParams.id);
    };

    function saveDporAndJobDetails(submit){
      //Utility function that saves DPOR into Database
      //Picks saved DPOR's ID and saves each job against it
      if ($scope.jobDetails.length === 0){
        $scope.error = 'No Jobs in Report. Add a Job and try again';
        return false;
      }
      if ($scope.dpor.Date === undefined || $scope.dpor.Date === null){
        $scope.error = 'Invalid Date';
        return false;
      }
      $scope.dpor.ModifiedDate = new Date(); //Set modified date to 'now'

      if (submit === true){
        $scope.dpor.History.push(voucherStates.historyObjectFactory('submit', $routeParams.id, new Date()));
      }else{
        $scope.dpor.History.push(voucherStates.historyObjectFactory('save', $routeParams.id, new Date()));
      }

      if ($scope.dpor.id === undefined){
        //saving/submitting on the first time. Create.
        $scope.dpor = Employee.dailyProductionAndOvertimeReports.create({'id' : $routeParams.id}, $scope.dpor, function(){
          console.log('saved dpor id - %j', $scope.dpor.id);
          for (var i=0; i<$scope.jobDetails.length; i++){
            if ($scope.jobDetails[i].id === undefined){
              //update the expense object in the array index to the saved on so that the id field also gets included
              $scope.jobDetails[i] = DailyProductionAndOvertimeReport.jobdetails.create({'id': $scope.dpor.id}, $scope.jobDetails[i]);
            }else{
                DailyProductionAndOvertimeReport.jobdetails.updateById({'id' : $scope.dpor.id, 'fk' : $scope.jobDetails[i].id}, $scope.jobDetails[i]);
            }
          }
          ModalDialogs.informAction('Success. New Report created.', function(){
            //TODO refresh page
            return true;
          });
        });

      }else{
        //Report is already saved. Update.
        Employee.dailyProductionAndOvertimeReports.updateById({'id' : $routeParams.id, 'fk' : $scope.dpor.id}, $scope.dpor, function(){
          console.log('saved dpor id - %j', $scope.dpor.id);
          for (var i=0; i<$scope.jobDetails.length; i++){
            var jobDetail = $scope.jobDetails[i];
            if ($scope.jobDetails[i].id === undefined){
              //Expense added after last save
              $scope.jobDetails[i] = DailyProductionAndOvertimeReport.jobdetails.create({'id': $scope.dpor.id}, $scope.jobDetails[i]);
            }else{
              //Expense that was present in the last save`
                DailyProductionAndOvertimeReport.jobdetails.updateById({'id' : $scope.dpor.id, 'fk' : $scope.jobDetails[i].id}, $scope.jobDetails[i]);
            }
          }
          ModalDialogs.informAction('Success. Report saved.', function(){
            //TODO refresh page
            return true;
          });
        });
      }

    }

    $scope.save = function(){
        saveDporAndJobDetails(false); //saveOnly
    };

    $scope.submit = function(){
      ModalDialogs.confirmAction('A Report can\'t be edited once submitted. Please confirm.', function(){
        $scope.dpor.State = voucherStates.submitted;
        if (saveDporAndJobDetails(true) === false){
          //Save was not successful or validation criteria failed
          $scope.dpor.State = voucherStates.draft;
        }else{
          //submit was successful. re-direct user to home page
          $location.path('/dpor/home/' + $routeParams.id);
        }
      });
    };

    /*
     * Job Creation, Deletion and Editing Modal Starts
     */

    $scope.createJobDetail = function(){
      $scope.open();
    };

    $scope.deleteJobDetail = function(SlNo){
      ModalDialogs.confirmAction('Do you want to delete this job?', function(){
      //Remove the job
      var jobToDelete = $scope.jobDetails.splice(SlNo-1, 1); //SlNo is (expenses array index + 1)

      //delete the expense from the database if present there
        if (jobToDelete[0].id !== undefined && jobToDelete[0].id !== null){
              DailyProductionAndOvertimeReport.jobdetails.destroyById({'id': $scope.dpor.id, 'fk': jobToDelete[0].id});
        }
    });
    };

    $scope.editJobDetail = function(SlNo){
      $scope.open($scope.jobDetails[SlNo - 1]);
    };

    $scope.open = function (jobDetail) {
      var modalInstance = $uibModal.open({
        animation: true,
        templateUrl: 'JobDetailModal.html',
        controller: 'JobDetailModalInstanceCtrl',
        resolve: {
          jobDetail: function () {
            return jobDetail;
          }/*,
          heads: function () {
              var allHeads = [];
              allHeads = allHeads.concat($scope.organisation.ExpenseHeads);
              allHeads = allHeads.concat($scope.employee.ExpenseHeads);
            return allHeads;
          }*/
        }
      });

      modalInstance.result.then(function (result) {
        if (result.isNew === true){ //Push new job into array
          $scope.newJobDetail = result.jobDetail;
          $scope.newJobDetail.SlNo = $scope.jobDetails.length+1;
          $scope.jobDetails.push($scope.newJobDetail);
        }

      }, function () {
        console.log('Modal dismissed at: ' + new Date());
      });
    };
    //Job Detail Creation and Editing Modal Ends

  });
