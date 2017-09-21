'use strict';
/**
 * @ngdoc function
 * @name expenseVouchersClientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the expenseVouchersClientApp
 */
angular.module('expenseVouchersClientApp')
  .controller('EmployeeDporCtrl', function($scope, $filter, DailyProductionAndOvertimeReport, Employee, Organisation, Jobdetail, $location,
                                              $routeParams, voucherStates, $uibModal, ModalDialogs) {

    $scope.error = '';
    $scope.employee = Employee.get({'id' : $routeParams.employeeid}, function(){
      $scope.recipientDetails = $scope.employee.firstName + " " + $scope.employee.lastName + "\n"
      + $scope.employee.address;
      $scope.organisation = Organisation.get({'id' : $scope.employee.organisationId}, function(){
        //Get the voucher
        $scope.dpor = DailyProductionAndOvertimeReport.findById({id: $routeParams.dporid}, function(){
          //Categorize voucher state to decide action buttons
          if (($scope.dpor.State === voucherStates.draft) &&
            ($scope.employee.employeeID === $scope.dpor.employeeId)){
            $scope.activeDpor = true;
          }else if($scope.dpor.State === voucherStates.submitted){
            $scope.submittedDpor = true;
          }else if (($scope.dpor.State === voucherStates.complete) ||
            ($scope.dpor.State === voucherStates.approved)){
            $scope.archivedDpor = true;
          }

          //Date in a form suitable for date field
          $scope.dpor.Date = new Date($scope.dpor.Date);
          $scope.dpor.starttime = new Date($scope.dpor.starttime);
          $scope.dpor.endtime = new Date($scope.dpor.endtime);

          //Get jobdetails for this dpor
          $scope.jobDetails = DailyProductionAndOvertimeReport.jobdetails({'id': $routeParams.dporid});
        });
      });
    });

    $scope.isManagerViewing = false;
    $scope.jobDetailsToDelete = [];

    $scope.createNewJobdetail = function(){
      $scope.newJobdetail = new Jobdetail();
      $scope.newJobdetail.amount = 0;
      console.log('show popover to true');
      $scope.newJobdetail.SlNo = $scope.jobDetails.length + 1;
      console.log('You clicked Add new jobDetail');
    };

    $scope.addNewJobdetail = function(){
      $scope.jobDetails.push($scope.newJobdetail);
      console.log('setting popover to false in add');
    };

    $scope.deleteJobdetail = function(SlNo){
      var jobDetailToDelete = $scope.jobDetails.splice(SlNo-1, 1);
      $scope.jobDetailsToDelete.push(jobDetailToDelete[0]);

      for (var i=0; i<$scope.jobDetails.length; i++){
        $scope.jobDetails[i].SlNo = i+1;
      }
    };

    $scope.cancel = function(){
      window.history.back();
      //$location.path('/home/' + $routeParams.employeeid);
    };

    function saveDporAndJobdetails(){
      //Utility function that saves Dpor into Database
      //Picks saved Dpor's ID and saves each expense against it
      if ($scope.jobDetails.length === 0){
        $scope.error = 'No Jobs in Report. Add a job and try again';
        return false;
      }

      if ($scope.dpor.Date === undefined || $scope.dpor.Date === null){
        $scope.error = 'Invalid Report Date';
        return false;
      }

      $scope.dpor.ModifiedDate = new Date();

      //Update the history for action

      $scope.dpor = Employee.dailyProductionAndOvertimeReports.updateById({'id' : $routeParams.employeeid, 'fk' : $routeParams.dporid},
        $scope.dpor, function(){
          console.log('saved dpor id - %j', $scope.dpor.id);
          for (var i=0; i<$scope.jobDetails.length; i++){
            var jobDetail = $scope.jobDetails[i];
            if (jobDetail.id !== undefined && jobDetail.id !== null){
              //jobDetail already present
              DailyProductionAndOvertimeReport.jobdetails.updateById({'id': $scope.dpor.id, 'fk': jobDetail.id}, jobDetail);
            }else{
              //expense created in this view
              //The saved ID should come in to view model to avoid duplication
              $scope.jobDetails[i] = DailyProductionAndOvertimeReport.jobdetails.create({'id': $scope.dpor.id}, jobDetail);
            }
          }
          ModalDialogs.informAction('Success. Dpor saved.', function(){
            return true;
          });
        });
    }

    $scope.datePickerOpened = false;

    $scope.dateOptions = {
      //dateDisabled: disabled,
      formatYear: 'yy',
      maxDate: new Date(), //I don't foresee a need to set a future date in any of the Report functionality
      minDate: new Date(2016, 8, 1 ), //System introduced on 1/9/2016
      startingDay: 1
    };

    $scope.openDatePicker = function() {
      $scope.datePickerOpened = true;
    };

    $scope.format = 'dd/MM/yyyy';

    $scope.save = function(){
      saveDporAndJobdetails();
    };

    $scope.submit = function(){
      ModalDialogs.confirmAction('Submitting Report... Please confirm.', function(){
        $scope.dpor.State = voucherStates.submitted;
        if (saveDporAndJobdetails() === false){
          //Save was not successful or validation criteria failed
          $scope.dpor.State = voucherStates.draft;
        }else{
          //submit was successful. re-direct user to home directory
          $location.path('/dpor/home/' + $routeParams.employeeid);
        }
      });
    };

    $scope.print = function(){
      if ($scope.dpor.State === voucherStates.approved){
        //Add action to history
        $scope.dpor.History.push(voucherStates.historyObjectFactory('print', $routeParams.id, new Date()));
        //Save the dpor state
        Employee.dailyProductionAndOvertimeReports.updateById({'id' : $routeParams.employeeid,
            'fk' : $routeParams.dporid}, $scope.dpor);
      }
      window.print();
    };

    $scope.deleteDpor = function(){
      ModalDialogs.confirmAction('Do you want to delete this report and all jobs in it?', function(){
        DailyProductionAndOvertimeReport.jobdetails.destroyAll({'id': $scope.dpor.id});
        DailyProductionAndOvertimeReport.deleteById({'id' : $scope.dpor.id});
        $location.path('/dpor/home/' + $routeParams.employeeid);
      });
    };

    /*
     * jobDetail Creation, Deletion and Editing Modal Starts
     */
    $scope.createNewJobdetail = function(){
      $scope.open();
    };

    $scope.deleteJobdetail = function(SlNo){
      ModalDialogs.confirmAction('Do you want to delete this job?', function(){
        //Remove the expense
        var jobDetailToDelete = $scope.jobDetails.splice(SlNo-1, 1); //SlNo is (jobDetails array index + 1)

        //update the SlNos of the remaining jobdetail &
        //Re-calculate the jobdetail total
        for (var i=0; i<$scope.jobDetails.length; i++){
          $scope.jobDetails[i].SlNo = i+1;
        }

        //delete the jobDetail from the database if present there
        if (jobDetailToDelete[0].id !== undefined && jobDetailToDelete[0].id !== null){
              DailyProductionAndOvertimeReport.jobdetails.destroyById({'id': $scope.dpor.id, 'fk': jobDetailToDelete[0].id});
        }

      });
    };

    $scope.editJobdetail = function(SlNo){
      $scope.open($scope.jobDetails[SlNo - 1]);
    };

    $scope.open = function (expense) {
      var modalInstance = $uibModal.open({
        animation: true,
        templateUrl: 'JobDetailModal.html',
        controller: 'JobDetailModalInstanceCtrl',
        resolve: {
          jobDetail: function () {
            return jobDetail;
          },
          dporDate: function() {
            return $scope.dpor.Date;
          }
        }
      });

      modalInstance.result.then(function (result) {
        if (result.isNew === true){ //Push new expense into array
          $scope.newJobdetail = result.jobDetail;
          $scope.newJobdetail.SlNo = $scope.jobDetails.length+1;
          $scope.jobDetails.push($scope.newJobdetail);
        }

      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };
    //Jobdetail Creation and Editing Modal Ends

  });
