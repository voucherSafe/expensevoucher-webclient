'use strict';

describe('Controller: EditVoucherCtrl', function () {

  // load the controller's module
  beforeEach(module('expenseVouchersClientApp'));

  var EditVoucherCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EditVoucherCtrl = $controller('EditVoucherCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  //it('should attach a list of awesomeThings to the scope', function () {
  //  expect(EditVoucherCtrl.awesomeThings.length).toBe(3);
  //});
});
