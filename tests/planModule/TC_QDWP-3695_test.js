Feature('Intake tab-Reseach tools Top Tools tab - Update first link to IBM Engage-test');

Before((I,loginpage,homepage) => { // ******************Author Nagraj*************
    I.amOnPage('/');
    loginpage.login('nashanke@in.ibm.com', '$sonata@1611111');
    homepage.toClickOnCoachingDashbaord();
});

Scenario('validate resource tool link', (coachingdashboardpage,intakepage) => {
    coachingdashboardpage.toClickOnPlanIcon();
    intakepage.toClickOnIntakeTab();
    intakepage.validateResearchtoolsUrl();
});

