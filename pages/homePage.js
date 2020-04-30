const { I } = inject();

module.exports = {

  //Locators 
  dashboardLink: { 
    coachingDashboard: ".//a[text()='Coaching Dashboard']"
  },

  dashboardArrowLinks:{
    coachingDashboard:".//*[@class='sc-fzozJi dteCCc']//a[@href='/coaching']"
  },

  //Methods
  toClickOnCoachingDashbaord(){ 
    I.wait(2);
    I.waitForElement(this.dashboardLink.coachingDashboard,500);
    I.click(this.dashboardLink.coachingDashboard);
  },

  toClickOnCoachingDashbaordArrowLink(){ 
    I.wait(2);
    I.waitForElement(this.dashboardArrowLinks.coachingDashboard,500);
    I.click(this.dashboardArrowLinks.coachingDashboard);
  }

  
};
