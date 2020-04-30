const { I } = inject();
const assert = require('assert');

module.exports = {

    fields: {
      CoachDashoard: "//a[text()='Coaching Dashboard']",
      AtlasID: "//div[text()='Atlas ID']",
      plan: "//*[@id='coaching-table']/tbody/tr[4]/td[15]/a/span/img",
      SolutionStrategy: "//*[@id='coaching-tabs-solution']",
      SalesStrategy: "//*[@id='coaching-tabs-sales']",
      RelationshipStatus: "//div[text()='Relationship Status']",
      TargetPartner: '//*[@id="target-partner-input"]',
      TargetPartnerErrormessage: '//div[text()="Please input a message less than 50 characters."]',
      SeniorInteractions: '//*[text()="Most Senior Interactions"]',
      IBMRole: '//*[@id="ibmer-role-input"]',
      clientRole: '//*[@id="client-roll-input"]',
      keyIBMImperatives: '//*[@id="key-ibm-imperatives"]',
      Apply: "//button[text()='Apply']",
      image: "//*[@id='root']/div/div[4]/div[3]/div/div[3]/div[1]/section/div/div/div[2]/span/img",
      TargetPartnerimage: "//*[@id='root']/div/div[4]/div[3]/div[4]/div[1]/section/section/div/div/div[2]/span/img",
      IBMROLE: "//*[@id='root']/div/div[4]/div[3]/div[4]/div[2]/section/section/div/div/div[2]/span/img",
      clientRoleImage: "//*[@id='root']/div/div[4]/div[3]/div[4]/div[2]/section/section/div/div/div[2]/span/img"
    },

    locators: {
      validateHeader: "//*[text()='Plan']",
      atlas_id: "//*[@id='coaching-table']/tbody/tr[2]/td[15]",
      solnStrategyTab: "//*[text()='Solution Strategy']",
      enterTextforSolnDifferentiatorsApplet: "//*[@id='solution-differentiators']",
      apply: "//*[text()='Apply']",
      cancel: "//*[text()='Cancel']",
      checkIcon: "//*[@id='root']//div[4]/div[3]//div[4]/div[1]/section[1]//div[2]/span/img",
      enterTextforClientBusinessCaseApplet: "//*[@id='client-business-case']",
      apply_disable: "//button[@data-testid ='apply']"
    },

    async VerifyKeyIBMImperativesBarrierstoAchieve() {
        I.wait(5);
        I.waitForElement(this.fields.SolutionStrategy,500);
        I.click(this.fields.SolutionStrategy);
       // I.waitUrlEquals('https://dwf-uat.us-south.containers.appdomain.cloud/deals/plan/solutionStrategy?dealDNA=20032519jXaPDDZ&cbeDNA=G200320hAwx');
        I.fillField(this.fields.keyIBMImperatives,'this is testing');
        I.click(this.fields.Apply);
        I.waitForElement(this.fields.image,500); 
        //I.seeCheckboxIsChecked(image);
        const text= await I.grabAttributeFrom(image, 'class');
        console.log(text);
        assert.equal(text,'icon-checkmark');
      },
      async VerifyKeySalesStrategyCharacterCount() {
        I.waitForElement(this.fields.SalesStrategy,500);
        I.click(this.fields.SalesStrategy);
        //I.waitUrlEquals('https://dwf-uat.us-south.containers.appdomain.cloud/deals/plan/solutionStrategy?dealDNA=20032519jXaPDDZ&cbeDNA=G200320hAwx');
        I.seeElement(this.fields.RelationshipStatus);
        I.waitForElement(this.fields.TargetPartner,500);
        I.fillField(this.fields.TargetPartner,'IAMTESTINGAPPLICATIONUSINGAUTOMATIONTOOLCODECEPTJSJAVASCRIPTNODEJSFORRUBICAUTOMATIONAPPLICATION');
        const TargetPartnererrormessage= await I.grabTextFrom("//div[text()='Please input a message less than 50 characters.']");
        console.log(TargetPartnererrormessage);
        assert.equal(TargetPartnererrormessage,'Please input a message less than 50 characters.');
        I.clearField(this.fields.TargetPartner);
        I.dontSeeElement(targetPartnerErrormessage);
      },
        
      async VerifyKeySalesStrategyIBMRoleCharacterCount()
      {
      
       // I.waitForElement(this.fields.SalesStrategy,500);
        //I.click(this.fields.SalesStrategy);
        //I.waitUrlEquals('https://dwf-uat.us-south.containers.appdomain.cloud/deals/plan/solutionStrategy?dealDNA=20032519jXaPDDZ&cbeDNA=G200320hAwx');
        I.seeElement(this.fields.RelationshipStatus);
        I.waitForElement(this.fields.SeniorInteractions,500);
        I.seeElement(this.fields.SeniorInteractions);
        I.waitForElement(this.fields.IBMRole,500);
        I.fillField(this.fields.IBMRole,'IAMTESTINGAPPLICATIONUSINGAUTOMATIONTOOLCODECEPTJSJAVASCRIPTNODEJSFORRUBICAUTOMATIONAPPLICATION');
        const IBMRoleerrormessage= await I.grabTextFrom("//div[text()='Please input a message less than 50 characters.']");
        console.log(IBMRoleerrormessage);
        assert.equal(IBMRoleerrormessage,'Please input a message less than 50 characters.');
        I.clearField(this.fields.IBMRole);
        I.dontSeeElement(targetPartnerErrormessage);
      },

      async VerifyKeySalesStrategyclientRoleCharacterCount()
      {
     
      //I.waitForElement(this.fields.SalesStrategy,500);
      //I.click(this.fields.SalesStrategy);
      //I.waitUrlEquals('https://dwf-uat.us-south.containers.appdomain.cloud/deals/plan/solutionStrategy?dealDNA=20032519jXaPDDZ&cbeDNA=G200320hAwx');
      I.seeElement(this.fields.RelationshipStatus);
      I.waitForElement(this.fields.clientRole,500);
        I.fillField(this.fields.clientRole,'IAMTESTINGAPPLICATIONUSINGAUTOMATIONTOOLCODECEPTJSJAVASCRIPTNODEJSFORRUBICAUTOMATIONAPPLICATION');
        const clientRoleerrormessage= await I.grabTextFrom("//div[text()='Please input a message less than 50 characters.']");
        console.log(clientRoleerrormessage);
        assert.equal(clientRoleerrormessage,'Please input a message less than 50 characters.');
        I.clearField(this.fields.clientRole);
        I.dontSeeElement(targetPartnerErrormessage);
      },

      async VerifyKeySalesStrategyTargetPartner() {
       
        I.waitForElement(this.fields.SalesStrategy,500);
        I.click(this.fields.SalesStrategy);
        //I.waitUrlEquals('https://dwf-uat.us-south.containers.appdomain.cloud/deals/plan/solutionStrategy?dealDNA=20032519jXaPDDZ&cbeDNA=G200320hAwx');
        I.seeElement(this.fields.RelationshipStatus);
        I.waitForElement(this.fields.TargetPartner,500);
        I.fillField(this.fields.TargetPartner,'This is testing only');
        I.click(this.fields.Apply);
        I.waitForClickable(this.fields.TargetPartnerimage,2000); 
        //I.seeCheckboxIsChecked(image);
        const targettextimage= await I.grabAttributeFrom(TargetPartnerimage, 'class');
         console.log(targettextimage);
      assert.equal(targettextimage,'icon-checkmark');
      },
      async VerifyKeySalesStrategyIBMRole()
      {
        
       // I.waitForElement(this.fields.SalesStrategy,500);
        //I.click(this.fields.SalesStrategy);
        //I.waitUrlEquals('https://dwf-uat.us-south.containers.appdomain.cloud/deals/plan/solutionStrategy?dealDNA=20032519jXaPDDZ&cbeDNA=G200320hAwx');
        I.seeElement(this.fields.RelationshipStatus);
        I.waitForElement(this.fields.SeniorInteractions,500);
        I.seeElement(this.fields.SeniorInteractions);
        I.waitForElement(this.fields.IBMRole,500);
        I.fillField(this.fields.IBMRole,'This is testing only');
        I.click(this.fields.Apply);
        I.waitForClickable(this.fields.IBMROLE,2000); 
        //I.seeCheckboxIsChecked(image);
        const IBMROLEimage= await I.grabAttributeFrom(IBMROLE, 'class');
         console.log(IBMROLEimage);
      assert.equal(IBMROLEimage,'icon-checkmark');
      },
      async VerifyKeySalesStrategyclientRole()
      {

    //  I.waitForElement(this.fields.SalesStrategy,500);
     // I.click(this.fields.SalesStrategy);
      //I.waitUrlEquals('https://dwf-uat.us-south.containers.appdomain.cloud/deals/plan/solutionStrategy?dealDNA=20032519jXaPDDZ&cbeDNA=G200320hAwx');
      I.seeElement(this.fields.RelationshipStatus);
      I.waitForElement(this.fields.clientRole,500);
        I.fillField(this.fields.clientRole,'This is testing only ');
        I.click(this.fields.Apply);
        I.waitForElement(this.fields.clientRoleImage,500); 
        //I.seeCheckboxIsChecked(image);
        const clientRoleImage1= await I.grabAttributeFrom(clientRoleImage, 'class');
         console.log(clientRoleImage1);
      assert.equal(clientRoleImage1,'icon-checkmark');
      },

      validatePlan() {
        I.waitForElement(this.locators.validateHeader,500);
        I.see('Plan',this.locators.validateHeader);
        I.waitForElement(this.locators.atlas_id,500);
        I.click(this.locators.atlas_id);
        I.see('Plan',this.locators.validateHeader);
       },

       validatePlanInsteadInvest() {
        I.waitForElement(this.locators.validateHeader,500);
        I.dontSee('Invest',this.locators.validateHeader);
        I.waitForElement(this.locators.atlas_id,500);
        I.click(this.locators.atlas_id);
        I.dontSee('Invest',this.locators.validateHeader);
       },

       async saveTextClientBusinessCaseApplet() {
        I.click(this.locators.solnStrategyTab);
        I.waitForElement(this.locators.enterTextforClientBusinessCaseApplet,20);
        I.click(this.locators.enterTextforClientBusinessCaseApplet);
        const value= await I.grabTextFrom(this.locators.enterTextforClientBusinessCaseApplet);
        console.log(value);
        I.fillField(this.locators.enterTextforClientBusinessCaseApplet,'Adding few words here');
        I.click(this.locators.apply);
       // pause();
       I.wait(5);
       I.waitForElement("//*[@id='root']//div[4]/div[3]//div[2]/div[1]/section//div[2]/span/img",{class:'icon-checkmark'},500);
        I.seeAttributesOnElements("//*[@id='root']//div[4]/div[3]//div[2]/div[1]/section//div[2]/span/img",{class:'icon-checkmark'});
       },

       async verifyApplyDisable(enterTextforApplet) {
        I.click(this.locators.solnStrategyTab);
        I.waitForElement(enterTextforApplet,500);
        I.click(enterTextforApplet);
        const value= await I.grabTextFrom(enterTextforApplet);
        console.log(value);
        const text = "qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq";
        I.fillField(enterTextforApplet,text);
       // pause();
       I.wait(2);
       I.waitForElement(this.locators.apply_disable,{class:'info-buttons bx--btn bx--btn--primary bx--btn--disabled'},500);
        I.seeAttributesOnElements(this.locators.apply_disable,{class:'info-buttons bx--btn bx--btn--primary bx--btn--disabled'});
        I.click(this.locators.cancel);
      },

      async saveTextSolnDifferentiatorsApplet() {
        I.click(this.locators.solnStrategyTab);
        I.waitForElement(this.locators.enterTextforSolnDifferentiatorsApplet,500);
        I.click(this.locators.enterTextforSolnDifferentiatorsApplet);
        const value= await I.grabTextFrom(this.locators.enterTextforSolnDifferentiatorsApplet);
        console.log(value);
        I.fillField(this.locators.enterTextforSolnDifferentiatorsApplet,'Adding few words here');
        I.click(this.locators.apply);
        //pause(); 
        I.wait(3);
        I.waitForElement(this.locators.checkIcon,{class:'icon-checkmark'},500);
        I.seeAttributesOnElements(this.locators.checkIcon,{class:'icon-checkmark'});
       },

       async verifyApplyDisable(enterTextforApplet) {
        I.click(this.locators.solnStrategyTab);
        I.waitForElement(enterTextforApplet,500);
        I.click(enterTextforApplet);
        const value= await I.grabTextFrom(enterTextforApplet);
        console.log(value);
        const text = "qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq";
        I.fillField(enterTextforApplet,text);
       // pause();
       I.wait(4);
       I.waitForElement(this.locators.apply_disable,{class:'info-buttons bx--btn bx--btn--primary bx--btn--disabled'},500);
        I.seeAttributesOnElements(this.locators.apply_disable,{class:'info-buttons bx--btn bx--btn--primary bx--btn--disabled'});
        I.click(this.locators.cancel);
      }
      
   }
   