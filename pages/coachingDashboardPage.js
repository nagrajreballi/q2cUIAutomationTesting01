const { I } = inject();
//const assert = require('assert');
const assert = require('assert');

module.exports = {

  // Locators
  coachingDashboardFileds:{  
    dashboardpagination_records: ".//*[@class='bx--pagination__text'][2]",
    messagetext: ".//*[@class='bx--inline-notification__text-wrapper']//p",
  },

  toClickOnPlanIconCoachingDashboard: { 
    toClickOnPlanIcon: ".//*[@id= 'coaching-table']//tbody//tr[2]//td[15]//a",
    homeLinkBreadcrumb: ".//*[@class='bx--breadcrumb-item']//a[@href='/home']",
    coachingDashbaordLinkBreadcrumb: ".//*[@class='bx--breadcrumb-item']//a[@href='/coaching']"
  },

  intakePageFields:{
    totalCoachingScore:".//*[text()='Total:']//following::*[@class='totals-tcv-field']",
    finalCoachingPriorityText:".//*[text()='Coaching Priority']//span",
    toSelectCScore: ".//*[@id= 'coaching-table']//tbody//tr[2]//td[10]",
    toSelectPriority: ".//*[@id= 'coaching-table']//tbody//tr[2]//td[11]",

  },

  fields: { 
    CoachDashoard: "//a[text()='Coaching Dashboard']",
    Errormessage: "//p[text()='The system will return more than 200 records. Please select filters before viewing the Coaching Dashboard.']",
    plan: "//*[@id='coaching-table']/tbody/tr[2]/td[15]/a/span/img",
    BreadCrum: "//*[@id='root']/div/nav/ol",
    CoachinhDashboardBreadCrum: "//*[@id='root']/div/nav/ol/li[2]/a",
    HomeBreadCrum: "//*[@id='root']/div/nav/ol/li[1]/a",
    AtlasID: "//div[@class='coaching-header' and  text()='Atlas ID']",
    Client: "//div[@class='coaching-header' and  text()='Client']",
    Description: "//div[@class='coaching-header' and  text()='Description']",
    TCV: "//div[@class='coaching-header' and  text()='TCV (USD)']",
    Brand: "//div[@class='coaching-header' and  text()='Brand']",
   ValDate: "//div[@class='coaching-header' and  text()='Val Date']",
   CloseDate: "//div[@class='coaching-header' and  text()='Close Date']",
   SS: "//div[@class='coaching-header' and  text()='SS']",
   Cscore: "//div[@class='coaching-header' and  text()='C-Score']",
   Priority: "//div[@class='coaching-header' and  text()='Priority']",
   Coaching: "//div[@class='coaching-header' and  text()='Coaching']",
   CoachingAssigned: "//div[@class='coaching-header' and  text()='Coach Assigned']",
   FlightPlan: "//div[@class='coaching-header' and  text()='Flight Plan']",
   Plan: "//div[@class='coaching-header' and  text()='Plan']",
   Intake: "//li//span[text()='Intake']",
   A1Input: "//li//span[text()='A1 Input']",
  Revenue: "//*[@id='coaching-tabs-revenue']",
   Coaching1: "//*[@id='coaching-tabs-coaching']",
   Solution: "//*[@id='coaching-tabs-solution']",
   Sales: "//*[@id='coaching-tabs-sales']",
   Generate: "//*[@id='coaching-tabs-generate']",
   filter: "//*[@id='modal-filter-open']",
   TCVFilter: "//*[@id='tcv-filter-select']/div[1]",
   number: "//div[text()=' <$1M']",
   ApplyButton: "//button[text()='Apply']"
 },

  //Methods
  async dashboardPaginationText(){ 
    I.scrollPageToTop();
    I.wait(2);
    I.waitForElement(this.coachingDashboardFileds.dashboardpagination_records,200);
    I.wait(4);
    const storetext = await I.grabTextFrom(this.coachingDashboardFileds.dashboardpagination_records);
    console.log('text is: '+storetext);
    var words = storetext.split(' ');
    I.wait(2);
    var str1 = words[2];
    console.log("Total number of items in coaching dashboard is: "+str1);
  },

  async headerMessage(){   
    I.scrollPageToTop();
    I.wait(2);
    I.waitForElement(this.coachingDashboardFileds.messagetext,200);
     I.wait(4);
    const storetextMessage = await I.grabTextFrom(this.coachingDashboardFileds.messagetext);
    console.log("Header text message is: "+storetextMessage);
  },

  toClickOnPlanIcon(){  
    I.wait(2);
    I.waitForElement(this.toClickOnPlanIconCoachingDashboard.toClickOnPlanIcon,200);
    I.click(this.toClickOnPlanIconCoachingDashboard.toClickOnPlanIcon);
  },

  async defaultpaginationcount() {
    I.wait(20);
    const title = await I.grabTextFrom(".//*[@class='bx--select-input__wrapper']//*[@id='bx-pagination-select-1']//option[1]");
    console.log(title);
    assert.equal(title, '12');
    },

    async VerifyBreadCrumb(){
      //I.waitForClickable(this.fields.CoachDashoard,1000); 
      //I.click(this.fields.CoachDashoard);
      //pause();
      I.waitUrlEquals('https://dwf-uat.us-south.containers.appdomain.cloud/coaching',100);
      I.waitForElement(this.fields.plan,200);
      I.click(this.fields.plan);
      I.waitForElement(this.fields.BreadCrum,200);
      I.seeElement(this.fields.BreadCrum);
      I.seeElement(this.fields.CoachinhDashboardBreadCrum);
      I.seeElement(this.fields.HomeBreadCrum);
      I.seeElement(this.fields.Intake);
      I.seeElement(this.fields.A1Input);
      I.seeElement(this.fields.Revenue);
      I.seeElement(this.fields.Coaching1);
      I.seeElement(this.fields.Solution);
      I.click(this.fields.Solution)
      I.click(this.fields.Sales);
      I.seeElement(this.fields.Sales);
      I.seeElement(this.fields.Generate);
      I.click(this.fields.CoachinhDashboardBreadCrum);
      I.waitForElement(this.fields.AtlasID,400);
      I.seeElement(this.fields.AtlasID);
      I.seeElement(this.fields.Client);
      I.seeElement(this.fields.Description);
      I.seeElement(this.fields.TCV); 
      I.seeElement(this.fields.Brand);
      I.seeElement(this.fields.ValDate);
      I.seeElement(this.fields.CloseDate);
      I.seeElement(this.fields.SS);
      I.seeElement(this.fields.Cscore);
      I.seeElement(this.fields.Priority);
      I.seeElement(this.fields.Coaching);
      I.seeElement(this.fields.CoachingAssigned);
      I.seeElement(this.fields.FlightPlan);
      I.seeElement(this.fields.Plan);
      const list=driver.findElements("//*[@id='coaching-table']/tbody/tr//td[5]/div");
      for (const data of list)
      {
        console.log(data);
        if(assert.notEqual(data,'1M'))
        {
          console.log(data);
        }
        else
        {
          console.log('1m');
        }
      }
     },

     async VerifyFilterValidation()
     {
      I.waitForElement(this.fields.filter);
      I.click(this.fields.filter);
      I.click(this.fields.TCVFilter);
      I.click(this.fields.number);
      I.click(this.fields.ApplyButton);
      const ycv='1M';
      const list1=driver.findElements("//*[@id='coaching-table']/tbody/tr//td[5]/div");
      for (const data1 of list1)
      {
        console.log(data1);
        
        if(data1<ycv)
        {
          console.log(data);
        }
        else
        {
          console.log('greater than 1M');
        }
      }
     },

     async VerifyErrormessage() {
       I.wait(3);
      I.waitUrlEquals('https://dwf-uat.us-south.containers.appdomain.cloud/coaching');
      const text= await I.grabTextFrom("//p[text()='The system will return more than 200 records. Please select filters before viewing the Coaching Dashboard.']");
      console.log(text);
      assert.equal(text,'The system will return more than 200 records. Please select filters before viewing the Coaching Dashboard.');
    },

    async toValidateHomeLinkBreadcrumb(){ 
      I.wait(5);
      I.waitForElement(this.toClickOnPlanIconCoachingDashboard.homeLinkBreadcrumb,500);
      const homeLinkText = await I.grabTextFrom(this.toClickOnPlanIconCoachingDashboard.homeLinkBreadcrumb);
      console.log("home link text is:" +homeLinkText);
      assert.equal(homeLinkText, 'Home');
    },

   async toValidateCoachingScoreAndCoachingPriority(){
    I.wait(4);
    I.waitForElement(this.intakePageFields.totalCoachingScore,500);
    const totalCoachingScoreValue = await I.grabTextFrom(this.intakePageFields.totalCoachingScore);
    console.log("Total coaching score value is: " +totalCoachingScoreValue);

    I.waitForElement(this.intakePageFields.finalCoachingPriorityText,100);
    const coachingPriorityText = await I.grabTextFrom(this.intakePageFields.finalCoachingPriorityText);
    console.log("Coaching Priority in coaching applet is showing : " +coachingPriorityText);

     if (totalCoachingScoreValue >= 50 && totalCoachingScoreValue <= 100) {
       console.log("Coaching Priority after selection is: " + coachingPriorityText);
       assert.equal(coachingPriorityText, 'High');
     }
     if (totalCoachingScoreValue >= 0 && totalCoachingScoreValue <= 49) {
       console.log("Coaching Priority after selection is: " + coachingPriorityText);
       assert.equal(coachingPriorityText, 'Medium');
     }
     else {
       console.log("Coaching Priority after selection is: " + coachingPriorityText);
     }
  },

  async toValidateCScoreAndCoachingScore(){
    I.wait(4);
    I.waitForElement(this.intakePageFields.totalCoachingScore,500);
    const totalCoachingScoreValue = await I.grabTextFrom(this.intakePageFields.totalCoachingScore);
    console.log("Total coaching score value in  intake tab is: " +totalCoachingScoreValue);

    I.waitForElement(this.toClickOnPlanIconCoachingDashboard.coachingDashbaordLinkBreadcrumb,500);
    I.click(this.toClickOnPlanIconCoachingDashboard.coachingDashbaordLinkBreadcrumb);

    I.waitForElement(this.intakePageFields.toSelectCScore,500);
    const totalCoachingScoreValueDashboard = await I.grabTextFrom(this.intakePageFields.toSelectCScore);
    console.log("Total coaching score value in dashbaord is: " +totalCoachingScoreValueDashboard);
    
    assert.equal(totalCoachingScoreValue, 'totalCoachingScoreValueDashboard');
  },

  async toValidatePriorityAndCoachingPriority(){
    I.waitForElement(this.intakePageFields.finalCoachingPriorityText,100);
    const coachingPriorityText = await I.grabTextFrom(this.intakePageFields.finalCoachingPriorityText);
    console.log("Coaching Priority in coaching applet is showing : " +coachingPriorityText);

    I.waitForElement(this.toClickOnPlanIconCoachingDashboard.coachingDashbaordLinkBreadcrumb,500);
    I.click(this.toClickOnPlanIconCoachingDashboard.coachingDashbaordLinkBreadcrumb);

    I.waitForElement(this.intakePageFields.toSelectPriority,100);
    const coachingPriorityTextDashboard = await I.grabTextFrom(this.intakePageFields.toSelectPriority);
    console.log("Coaching Priority in dashboard is : " +coachingPriorityTextDashboard);

    assert.equal(coachingPriorityText, 'coachingPriorityTextDashboard');
    }
};
