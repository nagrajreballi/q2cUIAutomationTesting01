Feature('TC_QDWP-3710-SolutionStratergy');

Before((I,loginpage,homepage) => {  // ******************Author Subhshree*************
    I.amOnPage('/');
    loginpage.login('nashanke@in.ibm.com', '$sonata@1611111');
    homepage.toClickOnCoachingDashbaord();
});

Scenario('ClientMetricsApply', (I, solutionstrategypage) => {
    solutionstrategypage.clientkeymetrics();
});

Scenario('clientmetricsUpdate', (I, solutionstrategypage) => {
    solutionstrategypage.clientkeymetricsUpdate();
    });

Scenario('clientmetricsCancel', (I, solutionstrategypage) => {
    solutionstrategypage.clientkeymetricsCancel();
    });