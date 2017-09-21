'use strict';
angular.module('expenseVouchersClientApp')
  .controller('ManagerDporCtrl', function($scope, DailyProductionAndOvertimeReport, Employee, Organisation, Jobdetail,
                                             $location, $routeParams, voucherStates, $uibModal, ModalDialogs) {

    $scope.error = '';
    $scope.employee = Organisation.employees.findById({'id' : $routeParams.organisationid,
      'fk': $routeParams.employeeid}, function(){
      $scope.recipientDetails = $scope.employee.firstName + " " + $scope.employee.lastName + "\n"
      + $scope.employee.address;
      $scope.organisation = Organisation.get({'id' : $scope.employee.organisationId}, function(){
        //Get the dpor
        $scope.dpor = DailyProductionAndOvertimeReport.findById({id: $routeParams.dporid}, function(){
          //Categorize dpor state to decide action buttons
          if (($scope.dpor.State === voucherStates.draft || $scope.dpor.State === voucherStates.rejected) &&
            ($scope.employee.employeeID === $scope.dpor.employeeId)){
            $scope.activeDpor = true;
          }else if($scope.dpor.State === voucherStates.submitted){
            $scope.submittedDpor = true;
          }else if (($scope.dpor.State === voucherStates.complete) ||
            ($scope.dpor.State === voucherStates.approved)){
            $scope.archivedDpor = true;
          }

          //Date in a form suitable for date field. Date property is a string in the database
          $scope.dpor.Date = new Date($scope.dpor.Date);
          $scope.dpor.starttime = new Date($scope.dpor.starttime);
          $scope.dpor.endtime = new Date($scope.dpor.endtime);

          //Get expenses for this voucher
          $scope.jobDetails = DailyProductionAndOvertimeReport.jobdetails({'id': $routeParams.dporid});
        });
      });
    });

    $scope.isManagerViewing = true;

    $scope.cancel = function(){
      window.history.back();
    };

    $scope.editJobdetail = function(SlNo){
      $scope.open($scope.jobDetails[SlNo - 1]);
    };

    $scope.open = function (jobdetail) {
      var modalInstance = $uibModal.open({
        animation: true,
        templateUrl: 'JobDetailModal.html',
        controller: 'JobDetailModalInstanceCtrl',
        resolve: {
          jobdetail: function () {
            return jobdetail;
          },
          voucherDate: function() {
            return $scope.voucher.Date;
          }
        }
      });
      modalInstance.result.then(function (result) {
        if (result.isNew === true){ //Push new expense into array
          $scope.newJobdetail = result.jobdetail;
          $scope.newJobdetail.SlNo = $scope.newJobdetail.length+1;
          $scope.jobDetails.push($scope.newJobdetail);
        }

      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };

    //Perform dpor or reject
    function managerAction(approve){
      if ($scope.dpor.employeeId === $routeParams.managerid){
        $scope.error = 'You can\'t approve/reject your own voucher. Ask any other manager in this organisation.';
        return;
      }
      var confirmMessage = '';
      if (approve === true){
        confirmMessage = 'About to Approve Report. Please confirm.';
      }else{
        confirmMessage = 'About to Reject Report. Please confirm.';
      }
      ModalDialogs.confirmAction(confirmMessage, function(){
        if (approve === true){
          $scope.dpor.State = voucherStates.approved;
          $scope.dpor.Approver = $routeParams.managerid;
          $scope.dpor.History.push(voucherStates.historyObjectFactory('approve', $routeParams.managerid, new Date()));
        }else{
          $scope.dpor.State = voucherStates.draft;
          $scope.dpor.History.push(voucherStates.historyObjectFactory('reject', $routeParams.managerid, new Date()));
        }
        $scope.dpor.ModifiedDate = new Date();

        $scope.dpor = Organisation.dailyProductionAndOvertimeReports.updateById({'id': $routeParams.organisationid,
          'fk': $routeParams.dporid}, $scope.dpor, function(){
            //Update expenses in case the manager has changed expense heads
            for (var i=0; i<$scope.jobDetails.length; i++){
              var jobDetail = $scope.jobDetails[i];
              if (jobDetail.id !== undefined && jobDetail.id !== null){
                //Expense already present
                DailyProductionAndOvertimeReport.jobdetails.updateById({'id': $scope.dpor.id, 'fk': jobDetail.id},
                    jobDetail);
              }
            }
          $location.path('/dpor/home/' + $routeParams.managerid);
        });
      });
    }

    $scope.datePickerOpened = false;

    $scope.dateOptions = {
      dateDisabled: 'disabled',
      formatYear: 'yy',
      maxDate: new Date(), //I don't foresee a need to set a future date in any of the voucher functionality
      minDate: new Date(2016, 3, 1 ), //System introduced on 1/4/2016
      startingDay: 1
    };

    $scope.openDatePicker = function() {
      //No voucher fields should be editable when the manager is viewing it
      //$scope.datePickerOpened = true;
    };

    $scope.format = 'dd/MM/yyyy';

    $scope.approve = function(){
      managerAction(true);
    };

    $scope.reject = function(){
      managerAction(false);
    };

    $scope.print = function(){
      window.print();
    };

  });
