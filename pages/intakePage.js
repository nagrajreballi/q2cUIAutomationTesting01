const { I } = inject();
const assert = require("assert");

module.exports = {

  // Locators 
  intakeTabClick: { 
    toClickOnIntakeTab: ".//*[@id='coaching-tabs-intake']//span//img",
    toClickOnIBMEngageLink: ".//*[@class='sc-fzpdyU bpAxtW']//a[text()='IBM Engage!']"
  },

  //Methods
  toClickOnIntakeTab(){ 
    I.wait(2);
    I.waitForElement(this.intakeTabClick.toClickOnIntakeTab,200);
    I.click(this.intakeTabClick.toClickOnIntakeTab);
  },

  async validateResearchtoolsUrl(){ 
    I.scrollPageToTop();
    I.wait(4);
    I.waitForElement(this.intakeTabClick.toClickOnIBMEngageLink,200);
    I.click(this.intakeTabClick.toClickOnIBMEngageLink);
    I.wait(5);
    I.switchToNextTab(1);
    I.wait(3);
    let url = await I.grabCurrentUrl();
    console.log("Current URL is:" +url);
    assert.equal(url,'https://w3.ibm.com/sales/engage/me');
  },
}
