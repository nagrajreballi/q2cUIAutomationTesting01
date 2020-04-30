Feature('Solution Strategy tab-Key IBM Imperatives & Barriers to Achieve applet-test');

Before((I,loginpage,homepage,coachingdashboardpage) => { // ******************Author Lakshmi*************
  I.amOnPage('/');
  loginpage.login('nashanke@in.ibm.com', '$sonata@1611111');
  homepage.toClickOnCoachingDashbaord();
  coachingdashboardpage.toClickOnPlanIcon();
});

  Scenario('TC3718_01', (planpage) => {
    planpage.VerifyKeyIBMImperativesBarrierstoAchieve();
  });
   