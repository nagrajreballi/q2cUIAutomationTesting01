Feature('PLAN-Solution Strategy tab-Solution Description applet-test');

Before((I,loginpage,homepage,coachingdashboardpage) => { // ******************Author Nagraj*************
    I.amOnPage('/');
    loginpage.login('nashanke@in.ibm.com', '$sonata@1611111');
    homepage.toClickOnCoachingDashbaord();
    coachingdashboardpage.toClickOnPlanIcon();
});

Scenario('Validate save button in solution description text box field', (coachingdashboardpage,solutionstrategypage) => {  
    solutionstrategypage.toClickOnSolutionStrategyTab();
    solutionstrategypage.toAddValidateSolutionDescription('previously added text is cleard and added new text using automation scripts');
});

Scenario('Validate update in solution description text box field', (coachingdashboardpage,solutionstrategypage) => {
    solutionstrategypage.toClickOnSolutionStrategyTab();
    solutionstrategypage.toUpdateValidateSolutionDescription('Updated existing text with new text and also added 123434567899 ~!@#$%^&*()_+special chars');
});

Scenario('Validate cancel button in solution description text box field', (coachingdashboardpage,solutionstrategypage) => {
    solutionstrategypage.toClickOnSolutionStrategyTab();
    solutionstrategypage.toCancelValidateSolutionDescription('testadeed to do cancel');
});