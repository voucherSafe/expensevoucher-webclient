'use strict';

describe('Controller: EmployeeVoucherCtrl', function () {

  // load the controller's module
  beforeEach(module('expenseVouchersClientApp'));

  var EmployeeVoucherCtrl,
    scope,
    routeParams;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $injector) {
    routeParams = {'voucherid': '123', 'employeeid': '123'};
    scope = $rootScope.$new();
    EmployeeVoucherCtrl = $controller('EmployeeVoucherCtrl', {
      $scope: scope,
      //dependencies
      Expense: $injector.get('Expense'),
      $routeParams: routeParams,
      voucherStates: $injector.get('voucherStates'),
      $location: $injector.get('$location'),
      Voucher: $injector.get('Voucher'),
      Employee: $injector.get('Employee'),
      Organisation: $injector.get('Organisation')
    });
    scope.expenses = [];
    scope.voucherTotalAmount = 0;
  }));

  function createNewExpense(currencyMajor, currencyMinor){
    scope.newExpense = {};
    scope.newExpense.Amount = {};
    scope.newExpense.Amount.currency = 'INR';
    scope.newExpense.Amount.major = currencyMajor;
    scope.newExpense.Amount.minor = currencyMinor;
    scope.newExpense.Date = new Date();
    scope.newExpense.SlNo = scope.expenses.length + 1;

  }

  it('Error string should be initialized to empty', function () {
    expect(scope.error).toEqual('');
  });

  it('Adding new Expenses should update expenses array and update voucher total amount', function(){
    createNewExpense(100,0);
    scope.addNewExpense();
    createNewExpense(200,0);
    scope.addNewExpense();
    expect(scope.expenses.length).toEqual(2);
    expect(scope.voucherTotalAmount).toEqual(300);
  });

  it('Removing an expense from middle of expenses should update expenses array and update voucher total amount', function(){
    createNewExpense(150,50);
    scope.addNewExpense();
    createNewExpense(250,50);
    scope.addNewExpense();
    createNewExpense(200,0);
    scope.addNewExpense();
    //Remove the middle one - SlNos should be [0, 1, 2]
    scope.deleteExpense(2);
    expect(scope.expenses.length).toEqual(2);
    expect(scope.voucherTotalAmount).toEqual(350.50);
    expect(scope.expenses[0].SlNo).toEqual(1);
    expect(scope.expenses[1].SlNo).toEqual(2);
  });

  it('Removing an expense from beginning of expenses should update expenses array and update voucher total amount', function(){
      createNewExpense(150,50);
      scope.addNewExpense();
      createNewExpense(250,50);
      scope.addNewExpense();
      createNewExpense(200,0);
      scope.addNewExpense();
      //Remove the middle one - SlNos should be [0, 1, 2]
      scope.deleteExpense(1);
      expect(scope.expenses.length).toEqual(2);
      expect(scope.voucherTotalAmount).toEqual(450.50);
      expect(scope.expenses[0].SlNo).toEqual(1);
      expect(scope.expenses[1].SlNo).toEqual(2);
    });

  it('Removing an expense from end of expenses should update expenses array and update voucher total amount', function(){
      createNewExpense(150,50);
      scope.addNewExpense();
      createNewExpense(250,50);
      scope.addNewExpense();
      createNewExpense(200,0);
      scope.addNewExpense();
      //Remove the middle one - SlNos should be [0, 1, 2]
      scope.deleteExpense(3);
      expect(scope.expenses.length).toEqual(2);
      expect(scope.voucherTotalAmount).toEqual(401);
      expect(scope.expenses[0].SlNo).toEqual(1);
      expect(scope.expenses[1].SlNo).toEqual(2);
    });

});
