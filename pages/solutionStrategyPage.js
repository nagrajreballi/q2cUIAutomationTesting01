const { I } = inject();
const assert = require('assert');
module.exports = {

  //Locators
  solutionStrategyPagesElements:{ 
    toClickOnSolutionStrTab: ".//*[@id='coaching-tabs-solution']//span//img",
    solutionDescriptionField: ".//*[@class='bx--text-area__wrapper']//textarea[@id='solution-description']",
    saveButton: ".//*[@class='bx--btn-set']//button[2]",
    cancelButton: ".//*[@class='bx--btn-set']//button[1]",
    successIcon:".//*[@class='bx--text-area__wrapper']//textarea[@id='solution-description']//preceding::*[6]"
  },

  fields: {
    coahingDashboard_lnk: "//*[text()='Coaching Dashboard']",
    AtlasID: "//div[text()='Atlas ID']",
    plan: "//*[@id='coaching-table']/tbody/tr[4]/td[15]/a/span/img",
    SolutionStrategy: "//*[@id='coaching-tabs-solution']",
    clientkeymetrics: ".//*[@id='client-key-metrics']",
    Apply: "//button[text()='Apply']",
    checkbox: "//*[@id='root']/div/div[4]/div[3]/div/div[1]/div[2]/section/div/div/div[2]/span/img",
    Text: "//*[@id='header']/a/text()[2]",
    Cancel:"//button[text()='Cancel']"
    },

    fields: {
      CoachDashoard: "//a[text()='Coaching Dashboard']",
      AtlasID: "//div[text()='Atlas ID']",
      plan: "//*[@id='coaching-table']/tbody/tr[2]/td[15]/a/span/img",
      SolutionStrategy: "//*[@id='coaching-tabs-solution']",
      clientscope: "//*[@id='client-scope']",
      Apply: "//button[text()='Apply']",
      image: "//*[@id='root']/div/div[4]/div[3]/div/div[1]/div[2]/section/div/div[1]/div[2]/span/img",
      Text: "//*[@id='header']/a/text()[2]"
    },

  //Method
toClickOnSolutionStrategyTab(){ 
  I.wait(2);
I.waitForElement(this.solutionStrategyPagesElements.toClickOnSolutionStrTab,200);
I.click(this.solutionStrategyPagesElements.toClickOnSolutionStrTab);
},

toAddValidateSolutionDescription(solutiondesc){ 
  I.wait(2);
  I.scrollPageToTop();
  I.waitForElement(this.solutionStrategyPagesElements.solutionDescriptionField,200);
  I.clearField(this.solutionStrategyPagesElements.solutionDescriptionField);
  I.wait(2);
  I.waitForElement(this.solutionStrategyPagesElements.solutionDescriptionField,solutiondesc,200);
  I.fillField(this.solutionStrategyPagesElements.solutionDescriptionField,solutiondesc);
  I.wait(5);
  I.waitForClickable(this.solutionStrategyPagesElements.saveButton);
  I.click(this.solutionStrategyPagesElements.saveButton);
},

toUpdateValidateSolutionDescription(updatesolutiondesc){  
  I.wait(2);
  I.scrollPageToTop();
  I.waitForElement(this.solutionStrategyPagesElements.solutionDescriptionField,200);
  I.fillField(this.solutionStrategyPagesElements.solutionDescriptionField,updatesolutiondesc);
  I.wait(4);
  I.waitForClickable(this.solutionStrategyPagesElements.saveButton);
  I.click(this.solutionStrategyPagesElements.saveButton);
  },

  toCancelValidateSolutionDescription(addCancelDes){ 
    I.wait(2);
    I.scrollPageToTop();
    I.waitForElement(this.solutionStrategyPagesElements.solutionDescriptionField,200);
    I.clearField(this.solutionStrategyPagesElements.solutionDescriptionField);
    I.wait(2);
    I.waitForElement(this.solutionStrategyPagesElements.solutionDescriptionField,200);
    I.fillField(this.solutionStrategyPagesElements.solutionDescriptionField,addCancelDes);
    I.wait(6);
    I.waitForClickable(this.solutionStrategyPagesElements.cancelButton);
    I.click(this.solutionStrategyPagesElements.cancelButton);
    },

  validateSuccessIcon(){ 
    I.wait(8);
  I.waitForVisible(this.solutionStrategyPagesElements.successIcon);
  I.assertTrue(this.solutionStrategyPagesElements.successIcon);
  },

  async clientkeymetrics() {
    I.waitForElement(this.fields.plan,120);
    I.click(this.fields.plan);
    I.waitForElement(this.fields.SolutionStrategy,25);
    I.click(this.fields.SolutionStrategy);
    I.click(this.fields.clientkeymetrics);
    I.fillField(this.fields.clientkeymetrics,'test');
    I.click(this.fields.Apply);
    const text= await I.grabAttributeFrom(this.fields.checkbox, 'class');
    console.log(text);
    assert.equal(text,'icon-checkmark');
    },

    clientkeymetricsUpdate() {   
      I.waitForElement(this.fields.plan,120);
      I.click(this.fields.plan);
      I.waitForElement(this.fields.SolutionStrategy,25);
      I.click(this.fields.SolutionStrategy);
      I.click(this.fields.clientkeymetrics);
      I.fillField(this.fields.clientkeymetrics,'test');
      I.click(this.fields.Apply);
      I.clearField(this.fields.clientkeymetrics);
      I.fillField(this.fields.clientkeymetrics,'testUpdate');
      I.click(this.fields.Apply);
      },
    
      clientkeymetricsCancel() {   
        I.waitForElement(this.fields.plan,120);
        I.click(this.fields.plan);
        I.waitForElement(this.fields.SolutionStrategy,25);
        I.click(this.fields.SolutionStrategy);
        I.click(this.fields.clientkeymetrics);
        I.fillField(this.fields.clientkeymetrics,'test');
        I.click(this.fields.Cancel);
      },

      async VerifySolution() {
        I.wait(10);
        I.waitUrlEquals('https://dwf-uat.us-south.containers.appdomain.cloud/coaching');

        I.waitForElement(this.fields.plan,200); 
        I.click(this.fields.plan);
        I.refreshPage();
        I.waitForElement(this.fields.SolutionStrategy,500);
        I.click(this.fields.SolutionStrategy);
        //I.waitUrlEquals('https://dwf-uat.us-south.containers.appdomain.cloud/deals/plan/solutionStrategy?dealDNA=20032519jXaPDDZ&cbeDNA=G200320hAwx');
        I.fillField(this.fields.clientscope,'This is testing only');
        I.click(this.fields.Apply);
        I.waitForElement(this.fields.image,500); 
        //I.seeCheckboxIsChecked(image);
        const text= await I.grabAttributeFrom(image, 'class');
         console.log(text);
      assert.equal(text,'icon-checkmark');
      },
      
};
