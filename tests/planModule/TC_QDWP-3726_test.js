Feature('TC_3726_solutionDifferentiatorsApplet')
let enterTextforApplet = "//*[@id='solution-differentiators']";

Before((I,loginpage,homepage,coachingdashboardpage) => {  // ******************Author Divya*************
    I.amOnPage('/');
    loginpage.login('nashanke@in.ibm.com', '$sonata@1611111');
    homepage.toClickOnCoachingDashbaord();
    coachingdashboardpage.toClickOnPlanIcon();
});

Scenario('validateSolutionDifferentiators',(planpage,coachingdashboardpage) => {  
    planpage.saveTextSolnDifferentiatorsApplet();
});

Scenario('validateSolutionDifferentiators',(planpage,coachingdashboardpage) => {
    planpage.verifyApplyDisable(enterTextforApplet);
});
