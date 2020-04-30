Feature('TC_3041_001_validatePlan');

Before((I,loginpage,homepage) => {  // ******************Author Divya*************
  I.amOnPage('/');
  loginpage.login('nashanke@in.ibm.com', '$sonata@1611111');
  homepage.toClickOnCoachingDashbaord();

});

Scenario('validatePlan',(planpage) => {
  planpage.validatePlan();
});

Scenario('validatePlan',(planpage) => {
  planpage.validatePlanInsteadInvest();
});
