Feature('Clicking on the arrow on any of the Home Page tiles takes you to that page');

Before((I,loginpage) => {  // ******************Author Nagraj*************
    I.amOnPage('/');
    loginpage.login('nashanke@in.ibm.com', '$sonata@1611111');
  });

  Scenario('Validate Home page after clicking on coaching dashbaord arrow', (homepage,coachingdashboardpage) => {
    homepage.toClickOnCoachingDashbaordArrowLink();
    coachingdashboardpage.toValidateHomeLinkBreadcrumb();
     });