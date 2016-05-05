'use strict';

/**
 * @ngdoc service
 * @name expenseVouchersClientApp.ModalDialogs
 * @description
 * # ModalDialogs
 * Service in the expenseVouchersClientApp.
 */
angular.module('expenseVouchersClientApp')
  .service('ModalDialogs', ['$uibModal', function ($uibModal) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    //Confirmation modal
    this.confirmAction = function(message, actionToPerform){

      var modalInstance = $uibModal.open({
        animation: true,
        templateUrl: 'ConfirmationDialogModal.html',
        controller: 'ConfirmationDialogController',
        resolve: {
          message: function(){
            return message;
          }
        }
      });

      modalInstance.result.then(function (result) {
        if (result.selection === true){
          actionToPerform();
        }
      }, function () {
        console.info('Modal dismissed at: ' + new Date());
      });
    };
    //Confirmation modal ends

    //Info Modal
    this.informAction = function(message, callback){
      var modalInstance = $uibModal.open({
        animation: true,
        templateUrl: 'InformationDialogModal.html',
        controller: 'InformationDialogController',
        resolve: {
          message: function(){
            return message;
          }
        }
      });

      modalInstance.result.then(function (result) {
        callback();
      }, function () {
        callback();
        console.info('Modal dismissed at: ' + new Date());
      });
    };
    //Info modal ends
  }]);
