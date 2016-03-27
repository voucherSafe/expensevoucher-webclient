'use strict';

describe('Service: dateprovider', function () {

  // load the service's module
  beforeEach(module('expenseVouchersClientApp'));

  // instantiate service
  var dateprovider;
  beforeEach(inject(function (_dateprovider_) {
    dateprovider = _dateprovider_;
  }));

  it('should do something', function () {
    expect(!!dateprovider).toBe(true);
  });

  it('Start date for September with current month context should be 1 Sep', function(){
    var context = 'currentMonth';
    var currentDate = new Date(2015, 8, 5); //5 Sep 2015; month is 0 based
    dateprovider.setContext(context, currentDate);

    var startDateTime = dateprovider.getStartDate().getTime(); //Convert to number for comparison
    var expectedStartDateTime = new Date(2015, 8, 1).getTime();

    expect(startDateTime).toEqual(expectedStartDateTime);
  });

  it('End date for September with current month context should be current date', function(){
    var context = 'currentMonth';
    var currentDate = new Date(2015, 8, 6); //6 Sep 2015; month is 0 based

    dateprovider.setContext(context, currentDate);
    var endDateTime = dateprovider.getEndDate().getTime(); //Convert to number for comparison
    var expectedEndDateTime = new Date(2015, 8, 6).getTime();

    expect(endDateTime).toEqual(expectedEndDateTime);
  });

  it('Start date for September with last month context should be 1 Aug', function(){
    var context = 'lastMonth';
    var currentDate = new Date(2015, 8, 5); //5 Sep 2015; month is 0 based
    dateprovider.setContext(context, currentDate);

    var startDateTime = dateprovider.getStartDate().getTime(); //Convert to number for comparison
    var expectedStartDateTime = new Date(2015, 7, 1).getTime();

    expect(startDateTime).toEqual(expectedStartDateTime);
  });

  it('End date for September with last month context should be 31 Aug', function(){
    var context = 'lastMonth';
    var currentDate = new Date(2015, 8, 6); //6 Sep 2015; month is 0 based
    dateprovider.setContext(context, currentDate);

    var endDateTime = dateprovider.getEndDate().getTime(); //Convert to number for comparison
    var expectedEndDateTime = new Date(2015, 7, 31).getTime();

    expect(endDateTime).toEqual(expectedEndDateTime);
  });

  it('Start date for January with last month context should be 1 Dec of previous year', function(){
    var context = 'lastMonth';
    var currentDate = new Date(2015, 0, 5); //5 Sep 2015; month is 0 based
    dateprovider.setContext(context, currentDate);

    var startDateTime = dateprovider.getStartDate().getTime(); //Convert to number for comparison
    var expectedStartDateTime = new Date(2014, 11, 1).getTime();

    expect(startDateTime).toEqual(expectedStartDateTime);
  });

  it('End date for January with last month context should be 31 Dec of previous year', function(){
    var context = 'lastMonth';
    var currentDate = new Date(2015, 0, 5); //6 Sep 2015; month is 0 based
    dateprovider.setContext(context, currentDate);

    var endDateTime = dateprovider.getEndDate().getTime(); //Convert to number for comparison
    var expectedEndDateTime = new Date(2014, 11, 31).getTime();

    expect(endDateTime).toEqual(expectedEndDateTime);
  });

  it('End date for February with current month context in a leap year should current date', function(){
    var context = 'currentMonth';
    var currentDate = new Date(2016, 1, 5); //6 Sep 2015; month is 0 based
    dateprovider.setContext(context, currentDate);
    var endDateTime = dateprovider.getEndDate().getTime(); //Convert to number for comparison
    var expectedEndDateTime = new Date(2016, 1, 5).getTime();

    expect(endDateTime).toEqual(expectedEndDateTime);
  });

  it('End date for March with last month context in a leap year should be 29 Feb', function(){
    var context = 'lastMonth';
    var currentDate = new Date(2016, 2, 5); //6 Sep 2015; month is 0 based
    dateprovider.setContext(context, currentDate);

    var endDateTime = dateprovider.getEndDate().getTime(); //Convert to number for comparison
    var expectedEndDateTime = new Date(2016, 1, 29).getTime();

    expect(endDateTime).toEqual(expectedEndDateTime);
  });

  it('End date for February with current month context in a non leap year should be current date', function(){
    var context = 'currentMonth';
    var currentDate = new Date(2016, 1, 28); //6 Sep 2015; month is 0 based
    dateprovider.setContext(context, currentDate);

    var endDateTime = dateprovider.getEndDate().getTime(); //Convert to number for comparison
    var expectedEndDateTime = new Date(2016, 1, 28).getTime();

    expect(endDateTime).toEqual(expectedEndDateTime);
  });

  it('End date for March with last month context in a non leap year should be 28 Feb', function(){
    var context = 'lastMonth';
    var currentDate = new Date(2015, 2, 5); //6 Sep 2015; month is 0 based
    dateprovider.setContext(context, currentDate);

    var endDateTime = dateprovider.getEndDate().getTime(); //Convert to number for comparison
    var expectedEndDateTime = new Date(2015, 1, 28).getTime();

    expect(endDateTime).toEqual(expectedEndDateTime);
  });

});
