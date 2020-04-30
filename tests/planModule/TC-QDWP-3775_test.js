Feature('CoachingDashboardIntailFilter');

Before((I,loginpage,homepage) => {  // ******************Author Laksmi*************
  I.amOnPage('/');
  loginpage.login('nashanke@in.ibm.com', '$sonata@1611111');
  homepage.toClickOnCoachingDashbaord();
});

  Scenario('TC3775_01', (coachingdashboardpage) => {
    coachingdashboardpage.VerifyErrormessage();
  });
   