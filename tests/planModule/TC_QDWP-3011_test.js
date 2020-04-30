 const assert = require('assert');
  Feature('TC_QDWP-3011_DefaultPaginationCount');

  Before((I,loginpage,homepage) => {  // ******************Author Subhshree*************
    I.amOnPage('/');
    loginpage.login('nashanke@in.ibm.com', '$sonata@1611111');
    homepage.toClickOnCoachingDashbaord();
});

Scenario('DefaultPaginationCount', (I,coachingdashboardpage) => {
  coachingdashboardpage.defaultpaginationcount();
 });