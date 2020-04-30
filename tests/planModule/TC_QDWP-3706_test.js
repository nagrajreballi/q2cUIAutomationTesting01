Feature('TC_3706_clientBusinessApplet')
let enterTextforApplet = "//*[@id='client-business-case']";

Before((I,loginpage,homepage) => {  // ******************Author Divya*************
    I.amOnPage('/');
    loginpage.login('nashanke@in.ibm.com', '$sonata@1611111');
    homepage.toClickOnCoachingDashbaord();
});


Scenario('validateClientBusinessCaseApplet',(coachingdashboardpage,planpage) => {
    //planpage.validatePlan();
    coachingdashboardpage.toClickOnPlanIcon();
    planpage.saveTextClientBusinessCaseApplet();
});

Scenario('validateClientBusinessCaseApplet',(coachingdashboardpage,planpage) => {
   // planPage.validatePlan();
    coachingdashboardpage.toClickOnPlanIcon();
    planpage.verifyApplyDisable(enterTextforApplet);
});