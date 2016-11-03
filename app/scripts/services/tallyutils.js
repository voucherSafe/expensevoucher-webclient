'use strict';

/**
 * @ngdoc service
 * @name expenseVouchersClientApp.tallyUtils
 * @description
 * # tallyXMLUtils
 * Service in the expenseVouchersClientApp.
 */
angular.module('expenseVouchersClientApp')
  .service('tallyUtils', function ($http, Voucher) {

    //Utility function for XML Escaping
    if (!String.prototype.encodeHTML) {
      String.prototype.encodeHTML = function(){
        return this.replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;')
          .replace(/'/g, '&apos;');
      };
    }

    //Utility function to replace globally
    String.prototype.replaceAll = function(search, replacement) {
      var target = this;
      return target.split(search).join(replacement);
    };

    this.tallyDateFormatter = function(date){
      var dateString = '';
      dateString = '' + date.getFullYear() + ("0" + (date.getMonth() + 1)).slice(-2) + ('0' + date.getDate()).slice(-2);
      return dateString;
    };

    this.populateXMLRequest = function(voucher, expenses){
      //Replace the template values with the voucher actual values
      //1. Date in YYYYMMDD format
      var formattedDate = this.tallyDateFormatter(new Date(voucher.Date));
      this.XMLRequest = this.XMLRequestTemplate.replaceAll('@@@DATE@@@', formattedDate);
      //2. Narration using Voucher's Expense Particulars
      this.XMLRequest = this.XMLRequest.replace('@@@NARRATION@@@', expenses[0].Particulars);
      //3. Head using Voucher's expense head
      this.XMLRequest = this.XMLRequest.replace('@@@LEDGERNAME@@@', expenses[0].Head);
      //4. Voucher Number
      this.XMLRequest = this.XMLRequest.replace('@@@VOUCHERNUMBER@@@', voucher.VrNo);
      //5. Voucher Amount
      this.XMLRequest = this.XMLRequest.replaceAll('@@@AMOUNT@@@', voucher.Amount);
    };

    //Templates for various XML strings for Tally import
    var templates = {
      Envelope      : {
        templateFileURL : '../templates/TallyRequestEnvelopeTemplate.xml',
        templateString  : ''
      },
      Voucher       : {
        templateFileURL : '../templates/TallyRequestVoucherTemplate.xml',
        templateString  : ''
      },
      CreditExpense : {
        templateFileURL : '../templates/TallyRequestCreditExpenseTemplate.xml',
        templateString  : ''
      },
      DebitExpense  : {
        templateFileURL : '../templates/TallyRequestDebitExpenseTemplate.xml',
        templateString  : ''
      }
    };

    function getTemplateValueSetter(key, callback){
      return function(value){
        templates[key].templateString = value.data;
        count++;
        //must be a success
        //console.log('Success code - ' + response.status);
        //console.log(templates[key].templateFileURL + ' Success message - %', value.data);
        //console.log('Count now is ' + count);
        if(count === 4){
          //Done initialization
          //console.log('Completed Initialization of templates...');
          callback();
        }
      };
    }

    var count = 0;

    this.initializeTemplates = function(callback) {
      //Load up the templates and have them ready as strings
      //Initialize the templates
      for (var templateName in templates) {
        var templateValueSetter = getTemplateValueSetter(templateName, callback);
        $http.get(templates[templateName].templateFileURL)
          .then(templateValueSetter, function (response) {
            count++;
            //hit some error, log it
            console.log('Error code - ' + response.status);
            console.log('Error message - %j', response.data);
          });
      }
    };

    this.createTallyXMLString = function(vouchers, organisation, callback) {

      console.log('Templates after filling %j ', templates);
      var tallyUtilsObj = this;
      var allVouchersString = '';
      var vouchersCount = vouchers.length;
      var voucherAllExpensesString = '';

      function expenseCallbackProvider(k) {
        return function (expenses) {
          console.log('Length of Expenses ' + expenses.length);
          console.log('Voucher inside expense get callback %j', vouchers[k]);
          voucherAllExpensesString = '';
          //For Each Expense
          for (var j = 0; j < expenses.length; j++) {
            console.log('Expense is %j ', expenses[j]);
            var creditExpenseString = templates.CreditExpense.templateString.slice(0);
            //console.log('Credit Expense loaded from template is ' + creditExpenseString);
            //Start Replacing template params
            //var expenseHead = expenses[j].HeadofAccount;
            //console.log('Encoded string is ' + expenseHead.encodeHTML());
            creditExpenseString = creditExpenseString.replace('@@@LEDGERNAME@@@', expenses[j].HeadofAccount.encodeHTML());
            creditExpenseString = creditExpenseString.replaceAll('@@@AMOUNT@@@',
              expenses[j].Amount.major + '.' + expenses[j].Amount.minor);
            console.log('Completed work for 1 expense, creditExpenseString is ' + creditExpenseString);
            voucherAllExpensesString = voucherAllExpensesString.concat(creditExpenseString);
          }
          //Add a debit ledger entry
          var debitExpenseString = templates.DebitExpense.templateString.slice(0);
          debitExpenseString = debitExpenseString.replace('@@@PETTYCASHLEDGERNAME@@@',
            organisation.properties.PettyCashLedgerName);
          debitExpenseString = debitExpenseString.replace('@@@AMOUNT@@@', vouchers[k].Amount);
          voucherAllExpensesString = voucherAllExpensesString.concat(debitExpenseString);

          var voucherString = templates.Voucher.templateString.slice(0); //Take a copy leaving original intact, MDN's prescribed method

          //Replace the voucher params
          //1. Date in YYYYMMDD format
          var formattedDate = tallyUtilsObj.tallyDateFormatter(new Date(vouchers[k].Date));
          voucherString = voucherString.replaceAll('@@@DATE@@@', formattedDate);
          voucherString = voucherString.replace('@@@NARRATION@@@', vouchers[k].Narration);
          voucherString = voucherString.replace('@@@ALTERID@@@', organisation.properties.AlterID);
          voucherString = voucherString.replace('@@@MASTERID@@@', organisation.properties.MasterID);
          voucherString = voucherString.replace('@@@ENTEREDBY@@@', vouchers[k].employeeId);
          voucherString = voucherString.replace('@@@PARTYLEDGERNAME@@@', organisation.properties.PartyLedgerName);
          voucherString = voucherString.replace('@@@VOUCHERTYPENAME@@@', organisation.properties.VoucherTypeName);

          //Add the Expenses to the voucher
          voucherString = voucherString.replace('@@@EXPENSES@@@', voucherAllExpensesString);

          //Add the current voucher to voucher String
          allVouchersString = allVouchersString.concat(voucherString);
          //console.log('All vouchers ' + allVouchersString);
          //Check whether all the vouchers are done
          vouchersCount--;
          console.log('Voucher Count now ' + vouchersCount);
          if (vouchersCount === 0) {
            var tallyRequestString = templates.Envelope.templateString.slice(0);
            tallyRequestString = tallyRequestString.replace('@@@VOUCHERS@@@', allVouchersString);
            //console.log('Complete tallyRequestString - ' + tallyRequestString);
            callback(tallyRequestString);
          }else{
            //there are more; recurse
            Voucher.expenses({'id': vouchers[k+1].id}, expenseCallbackProvider(k+1));
          }
        }

      }

      //For each Voucher...
      //for (var i = 0; i < vouchers.length; i++) {
        //Get Expenses for this Voucher
        //Voucher.expenses({'id' : vouchers[i].id}, expenseCallbackProvider(i));
      //}
      // 3-Nov-2016
      //In order to maintain the order of vouchers in final string, using the following logic
      //if vouchers length is greater than 0, pick up first and pass on the callback
      //in callback - recurse the callback function after incrementing index
      if (vouchers.length >= 0){
        Voucher.expenses({'id' : vouchers[0].id}, expenseCallbackProvider(0));
      }//else just fall through doing nothing

    }

  });
