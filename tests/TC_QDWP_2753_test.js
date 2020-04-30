Feature('To verify C-score, priority in dashboard and Coaching Score,Coaching Priority in intake tab');

    Before((I,loginpage,homepage,coachingdashboardpage) => {  // ******************Author Nagraj*************
        I.amOnPage('/');
        loginpage.login('nashanke@in.ibm.com', '$sonata@1611111');
        homepage.toClickOnCoachingDashbaord();
        coachingdashboardpage.toClickOnPlanIcon();
    });

    Scenario('Validate Coaching Score value and Final Coaching pripority with High,Medium', (coachingdashboardpage) => {
        coachingdashboardpage.toValidateCoachingScoreAndCoachingPriority();
     });

     Scenario('Validate C-Score in dashbaord and coaching score values in intake tab', (coachingdashboardpage) => {
        coachingdashboardpage.toValidateCScoreAndCoachingScore();
     });

     Scenario('Validate priority in dashboard and Coaching Priority in intake tab', (coachingdashboardpage) => {
        coachingdashboardpage.toValidatePriorityAndCoachingPriority();
     });


