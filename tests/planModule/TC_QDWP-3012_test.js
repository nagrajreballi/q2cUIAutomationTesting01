Feature('TC_QDWP-3012_PaginationCounts_test feature test');

Before((I,loginpage,homepage) => {  // ******************Author Nagraj*************
    I.amOnPage('/');
    loginpage.login('nashanke@in.ibm.com', '$sonata@1611111');
    homepage.toClickOnCoachingDashbaord();
});

Scenario('Total number of items in coaching dashboard',(coachingdashboardpage) => {
    coachingdashboardpage.dashboardPaginationText();
});

Scenario('Validate header text message of coaching dashboard',(coachingdashboardpage) => {
    coachingdashboardpage.headerMessage();
});

