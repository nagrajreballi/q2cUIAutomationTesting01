Feature('VerifyCoachingDashboard');//updated

Before((I,loginpage,homepage) => {  // ******************Author Lakshmi*************
    I.amOnPage('/');
    loginpage.login('nashanke@in.ibm.com', '$sonata@1611111');
    homepage.toClickOnCoachingDashbaord();
});

Scenario('Verify CoachingDashboard',(coachingdashboardpage) => {
    coachingdashboardpage.VerifyBreadCrumb();
    coachingdashboardpage.VerifyFilterValidation();
    // pause();
});