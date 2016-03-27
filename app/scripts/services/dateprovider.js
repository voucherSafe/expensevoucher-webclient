'use strict';

/**
 * @ngdoc service
 * @name expenseVouchersClientApp.dateprovider
 * @description
 * # dateprovider
 * Service in the expenseVouchersClientApp.
 * Provide startDate and endDate depending on context (lastMonth | currentMonth)
 */
angular.module('expenseVouchersClientApp')
  .service('dateprovider', function () {

    //Month is 1 based
    function daysInMonth(month,year) {
      return new Date(year, month, 0).getDate();
    }

    this.context = 'lastMonth'; //default

    this.setContext = function(context, currentDate){
      this.context = context;
      var today = currentDate;
      if (context === 'currentMonth'){
        this.startDate = new Date(today);
        this.startDate.setDate(1); //everything else is same except the day of month which is set to 1
        this.endDate = today; //end date will be today
      }else if (context === 'lastMonth'){
        //context === 'lastMonth'
        this.startDate = new Date(today);
        this.startDate.setMonth(today.getMonth() - 1);
        this.startDate.setDate(1);
        this.endDate = new Date(this.startDate); //Month is already moved to last month
        this.endDate.setDate(daysInMonth(this.startDate.getMonth()+1, this.endDate.getYear()));
      }else{
        //Shouldn't happen; Set start and end dates to now and an empty query listing in the worst case
        this.startDate = this.endDate = new Date();
      }
    };

    this.getStartDate = function(){
      return this.startDate;
    };

    this.getEndDate = function(){
      return this.endDate;
    };

  });
