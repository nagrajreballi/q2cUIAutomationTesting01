const { I } = inject();
const assert = require('assert');
module.exports = {

  // insert your locators and methods here

  fields: {
    email: ".//*[@name='username']",
    password: ".//*[@name='password']",
    signInButton: ".//*[@id='btn_signin']",
    CoachDashoard: "//a[text()='Coaching Dashboard']",
    coahingDashboard_lnk: "//*[text()='Coaching Dashboard']",
    AtlasID: "//div[text()='Atlas ID']",
    plan: "//*[@id='coaching-table']/tbody/tr[12]/td[15]/a/span/img",
    coaching: "//a[@id='coaching-tabs-coaching']//span[text()='Coaching']",
    //clientscope: "//*[@id='client-scope']",
    coachinguidance:".//*[@id='coachingguidance']",
    Apply: "//button[text()='Apply']",
    checkbox: "//*[@id='root']/div/div[4]/section/div/div/div/div[2]/span/img",
    Cancel: "//button[text()='Cancel']",
  },

  async VerifyCoaching() {
    I.waitForElement(this.fields.plan,120);
    I.click(this.fields.plan);
    I.scrollPageToTop();
    I.waitForElement(this.fields.coaching,30);
    I.click(this.fields.coaching);
    I.fillField(this.fields.coachinguidance,'test');
    I.click(this.fields.Apply);
    const text= await I.grabAttributeFrom(this.fields.checkbox, 'class');
    console.log(text);
    assert.equal(text,'icon-checkmark');
    
  },


   VerifyCoachingupdate() {
    I.waitForElement(this.fields.plan,120);
    I.click(this.fields.plan);
    I.scrollPageToTop();
    I.waitForElement(this.fields.coaching,30);
    I.click(this.fields.coaching);
    I.fillField(this.fields.coachinguidance,'test');
    I.click(this.fields.Apply);
    I.clearField(this.fields.coachinguidance);
    I.fillField(this.fields.coachinguidance,'testupdate');
    I.click(this.fields.Apply);
       
  },


  VerifyCoachingCancel() {
    I.waitForElement(this.fields.plan,120);
    I.click(this.fields.plan);
    I.scrollPageToTop();
    I.waitForElement(this.fields.coaching,30);
    I.click(this.fields.coaching);
    I.fillField(this.fields.coachinguidance,'test');
    I.click(this.fields.Apply);
   },
};

