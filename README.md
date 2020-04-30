# Overview
This project provides automated UI testing for the Rubik application based on https://codecept.io/

# Setup
1. Git clone this project
1. Run `npm install` from the root of the project

# Running test cases

## Environment Variables
1. INTRANET_EMAIL - intranet email of test account
1. INTRANET_PASSWORD - intranet password of test account
1. GOOGLE_AUTHENTICATOR_KEY - The only way to get past w3 id login is to use the google authenticator option for the two factor auth code.  This would be the key that you get by decoding the QR code that w3 id gives you.  This key is associated with your test account, so it is very sensitive.  Treat it like you would your intranet password.  Google authenticator also is only available in production w3 id.

## Steps
1. Ensure that you set the environment variables for testing
1. Run `npx codeceptjs run --steps`

# Writing test cases
1. Read the guide step 4-5 https://codecept.io/quickstart/
1. We use WebDriver for writing tests, so also read https://codecept.io/webdriver/#writing-tests 

