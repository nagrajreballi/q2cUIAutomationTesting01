Feature('SolutionStratergy');

Before((I,loginpage,homepage) => {  // ******************Author Lakshmi*************
    I.amOnPage('/');
    loginpage.login('nashanke@in.ibm.com', '$sonata@1611111');
    homepage.toClickOnCoachingDashbaord();
});

Scenario('test3', (solutionstrategypage) => {
    solutionstrategypage.VerifySolution();
     });