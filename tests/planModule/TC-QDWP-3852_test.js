Feature('VerifySalesStrategeycharactercount');

Before((I,loginpage,homepage,coachingdashboardpage) => {  // ******************Author Laksmi*************
    I.amOnPage('/');
    loginpage.login('nashanke@in.ibm.com', '$sonata@1611111');
    homepage.toClickOnCoachingDashbaord();
    coachingdashboardpage.toClickOnPlanIcon();
  });

Scenario('Validate Sales strategy Character counts', (planpage) => {
    planpage.VerifyKeySalesStrategyCharacterCount();
    planpage.VerifyKeySalesStrategyIBMRoleCharacterCount();
    planpage.VerifyKeySalesStrategyclientRoleCharacterCount();
     });

     
Scenario('Validate apply functionality ', (planpage) => {
    planpage.VerifyKeySalesStrategyTargetPartner();
    planpage.VerifyKeySalesStrategyIBMRole();
    planpage.VerifyKeySalesStrategyclientRole();
     });