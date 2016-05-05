'use strict';

describe('Service: tallyUtils', function () {

  // load the service's module
  beforeEach(module('expenseVouchersClientApp'));

  // instantiate service
  var tallyUtils;
  beforeEach(inject(function (_tallyUtils_) {
    tallyUtils = _tallyUtils_;
  }));

  it('tallyUtils service should be available', function () {
    expect(!!tallyUtils).toBe(true);
  });

  it('tally Date Format should be accurate when month and day are single digit', function() {
    var date = new Date('2014-07-08');
    var formattedDate = tallyUtils.tallyDateFormatter(date);
    expect(formattedDate).toEqual('20140708');
  });

  it('tally Date Format should be accurate when month is single digit', function() {
    var date = new Date('2014-07-28');
    var formattedDate = tallyUtils.tallyDateFormatter(date);
    expect(formattedDate).toEqual('20140728');
  });

  it('tally Date Format should be accurate when date is single digit', function() {
    var date = new Date('2014-11-03');
    var formattedDate = tallyUtils.tallyDateFormatter(date);
    expect(formattedDate).toEqual('20141103');
  });

  it('tally Date Format should be accurate when month and day are double digit', function() {
    var date = new Date('2014-12-28');
    var formattedDate = tallyUtils.tallyDateFormatter(date);
    expect(formattedDate).toEqual('20141228');
  });

  it('createTallyXMLString should replace all fields when there is a single expense in a voucher', function() {
    //Mock a Voucher and Expense object
    var voucher = {};
    voucher.Amount = 150;
    voucher.Date = new Date('2014-12-28');
    voucher.VrNo = 1234;
    var expenses = [];
    var expense = {};
    expense.Head = 'Mobile Phone Charges';
    expense.Particulars = 'Being charges incurred for mobile phone of Managing Director';
    expenses.push(expense);

    //Create a dummy TallyXMLTemplate String
    var inputTallyXMLTemplate = '<DATE>@@@DATE@@@</DATE>' +
      '<NARRATION>@@@NARRATION@@@</NARRATION>' +
      '<VOUCHERTYPENAME>Payment</VOUCHERTYPENAME>' +
      '<VOUCHERNUMBER>@@@VOUCHERNUMBER@@@</VOUCHERNUMBER>' +
      '<PARTYLEDGERNAME>Petty Cash</PARTYLEDGERNAME>' +
      '<EFFECTIVEDATE>@@@DATE@@@</EFFECTIVEDATE>' +
      '<ISFORJOBWORKIN>No</ISFORJOBWORKIN>' +
      '<ALLOWCONSUMPTION>No</ALLOWCONSUMPTION>' +
      '<USEFORINTEREST>No</USEFORINTEREST>' +
      '<USEFORGAINLOSS>No</USEFORGAINLOSS>' +
      '</OLDAUDITENTRYIDS.LIST>' +
      '<LEDGERNAME>@@@LEDGERNAME@@@</LEDGERNAME>' +
      '<GSTCLASS/>' +
      '<ISDEEMEDPOSITIVE>Yes</ISDEEMEDPOSITIVE>' +
      '<ISLASTDEEMEDPOSITIVE>Yes</ISLASTDEEMEDPOSITIVE>' +
      '<AMOUNT>-@@@AMOUNT@@@</AMOUNT>' +
      '<BANKALLOCATIONS.LIST>       </BANKALLOCATIONS.LIST>' +
      '<ISLASTDEEMEDPOSITIVE>No</ISLASTDEEMEDPOSITIVE>' +
      '<AMOUNT>@@@AMOUNT@@@</AMOUNT>' +
      '<BANKALLOCATIONS.LIST>       </BANKALLOCATIONS.LIST>';

    //Expected
    var expectedTallyXMLRequest = '<DATE>20141228</DATE>' +
      '<NARRATION>Being charges incurred for mobile phone of Managing Director</NARRATION>' +
      '<VOUCHERTYPENAME>Payment</VOUCHERTYPENAME>' +
      '<VOUCHERNUMBER>1234</VOUCHERNUMBER>' +
      '<PARTYLEDGERNAME>Petty Cash</PARTYLEDGERNAME>' +
      '<EFFECTIVEDATE>20141228</EFFECTIVEDATE>' +
      '<ISFORJOBWORKIN>No</ISFORJOBWORKIN>' +
      '<ALLOWCONSUMPTION>No</ALLOWCONSUMPTION>' +
      '<USEFORINTEREST>No</USEFORINTEREST>' +
      '<USEFORGAINLOSS>No</USEFORGAINLOSS>' +
      '</OLDAUDITENTRYIDS.LIST>' +
      '<LEDGERNAME>Mobile Phone Charges</LEDGERNAME>' +
      '<GSTCLASS/>' +
      '<ISDEEMEDPOSITIVE>Yes</ISDEEMEDPOSITIVE>' +
      '<ISLASTDEEMEDPOSITIVE>Yes</ISLASTDEEMEDPOSITIVE>' +
      '<AMOUNT>-150</AMOUNT>' +
      '<BANKALLOCATIONS.LIST>       </BANKALLOCATIONS.LIST>' +
      '<ISLASTDEEMEDPOSITIVE>No</ISLASTDEEMEDPOSITIVE>' +
      '<AMOUNT>150</AMOUNT>' +
      '<BANKALLOCATIONS.LIST>       </BANKALLOCATIONS.LIST>';

    //Initialise
    //tallyUtils.XMLRequestTemplate = inputTallyXMLTemplate;

    //Populate
    //tallyUtils.populateXMLRequest(voucher, expenses);

    //Test
    //expect(tallyUtils.XMLRequest).toEqual(expectedTallyXMLRequest);
  });

});
