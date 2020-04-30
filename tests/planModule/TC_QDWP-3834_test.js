Feature('TC_QDWP-3834_Coaching');

Before((I,loginpage,homepage) => {  // ******************Author Subhshree*************
    I.amOnPage('/');
    loginpage.login('nashanke@in.ibm.com', '$sonata@1611111');
    homepage.toClickOnCoachingDashbaord();
});

Scenario('CoachingGuidanceCancel', (I,CoachingPage ) => {
CoachingPage.VerifyCoachingCancel();
});

Scenario('CoachingGuidanceUpdate', (I,CoachingPage ) => {
    CoachingPage.VerifyCoachingupdate();
    });

 Scenario('CoachingGuidanceCancel', (I,CoachingPage ) => {
     CoachingPage.VerifyCoachingCancel();
        });

