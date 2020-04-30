const { I } = inject();

module.exports = {
  //Locators
  fields: { 
    email: ".//*[@name='username']",
    password: ".//*[@name='password']"
  },
 // signInButton: {xpath: ".//*[@id='btn_signin']"},
 signInButton: { 
  xpath: ".//*[@id='btn_signin']"
},

////////////////////////////////////////////////////////////////////////////////////

  //Methods 
  login(username, password) { 
    I.waitForElement(this.fields.email, username,200);
    I.fillField(this.fields.email, username);
    I.waitForElement(this.fields.password, password);
    I.fillField(this.fields.password, password);
    I.click(this.signInButton.xpath);
    console.log('PASS- User is succesfully login to the application');
    I.wait(5);
  },
};
