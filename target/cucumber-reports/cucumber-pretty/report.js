$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login to Test Environment",
  "description": "",
  "id": "login-to-test-environment",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 16,
  "name": "Login to My Account with multiple users",
  "description": "",
  "id": "login-to-test-environment;login-to-my-account-with-multiple-users",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@MultipleUsers"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "User click on MyAccount",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User click on Login",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User enters username \u0027\u003cuserName\u003e\u0027 and Password \u0027\u003cpassword\u003e\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User Should be logged in to user Dashboard",
  "keyword": "Then "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "login-to-test-environment;login-to-my-account-with-multiple-users;",
  "rows": [
    {
      "cells": [
        "userName",
        "password"
      ],
      "line": 24,
      "id": "login-to-test-environment;login-to-my-account-with-multiple-users;;1"
    },
    {
      "cells": [
        "sdet@tekschool.us",
        "sdet"
      ],
      "line": 25,
      "id": "login-to-test-environment;login-to-my-account-with-multiple-users;;2"
    },
    {
      "cells": [
        "student@tekschool.us",
        "TEST"
      ],
      "line": 26,
      "id": "login-to-test-environment;login-to-my-account-with-multiple-users;;3"
    },
    {
      "cells": [
        "teacher@tekSchool.us",
        "teacher"
      ],
      "line": 27,
      "id": "login-to-test-environment;login-to-my-account-with-multiple-users;;4"
    },
    {
      "cells": [
        "consumer@tekschool.us",
        "JBond"
      ],
      "line": 28,
      "id": "login-to-test-environment;login-to-my-account-with-multiple-users;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3026628900,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on TEST Environment page",
  "keyword": "Given "
});
formatter.match({
  "location": "loginStepDefiniton.user_is_on_TEST_Environment_page()"
});
formatter.result({
  "duration": 1331714300,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Login to My Account with multiple users",
  "description": "",
  "id": "login-to-test-environment;login-to-my-account-with-multiple-users;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@MultipleUsers"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "User click on MyAccount",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User click on Login",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User enters username \u0027sdet@tekschool.us\u0027 and Password \u0027sdet\u0027",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User Should be logged in to user Dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "loginStepDefiniton.user_click_on_MyAccount()"
});
formatter.result({
  "duration": 133588400,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefiniton.user_click_on_Login()"
});
formatter.result({
  "duration": 265301200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sdet@tekschool.us",
      "offset": 22
    },
    {
      "val": "sdet",
      "offset": 55
    }
  ],
  "location": "loginStepDefiniton.user_enters_username_sdet_tekschool_us_and_Password_sdet(String,String)"
});
formatter.result({
  "duration": 296724900,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefiniton.user_click_on_Login_button()"
});
formatter.result({
  "duration": 833795300,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefiniton.user_Should_be_logged_in_to_user_Dashboard()"
});
formatter.result({
  "duration": 16462800,
  "status": "passed"
});
formatter.after({
  "duration": 847470900,
  "status": "passed"
});
formatter.before({
  "duration": 2244638100,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on TEST Environment page",
  "keyword": "Given "
});
formatter.match({
  "location": "loginStepDefiniton.user_is_on_TEST_Environment_page()"
});
formatter.result({
  "duration": 1044401300,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Login to My Account with multiple users",
  "description": "",
  "id": "login-to-test-environment;login-to-my-account-with-multiple-users;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@MultipleUsers"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "User click on MyAccount",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User click on Login",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User enters username \u0027student@tekschool.us\u0027 and Password \u0027TEST\u0027",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User Should be logged in to user Dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "loginStepDefiniton.user_click_on_MyAccount()"
});
formatter.result({
  "duration": 108067600,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefiniton.user_click_on_Login()"
});
formatter.result({
  "duration": 257073000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student@tekschool.us",
      "offset": 22
    },
    {
      "val": "TEST",
      "offset": 58
    }
  ],
  "location": "loginStepDefiniton.user_enters_username_sdet_tekschool_us_and_Password_sdet(String,String)"
});
formatter.result({
  "duration": 285549700,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefiniton.user_click_on_Login_button()"
});
formatter.result({
  "duration": 250116200,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefiniton.user_Should_be_logged_in_to_user_Dashboard()"
});
formatter.result({
  "duration": 7373600,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Account Login]\u003e but was:\u003c[My Account]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat stepDefinitions.loginStepDefiniton.user_Should_be_logged_in_to_user_Dashboard(loginStepDefiniton.java:57)\r\n\tat ✽.Then User Should be logged in to user Dashboard(Features/Login.feature:21)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 734130800,
  "status": "passed"
});
formatter.before({
  "duration": 1664338700,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on TEST Environment page",
  "keyword": "Given "
});
formatter.match({
  "location": "loginStepDefiniton.user_is_on_TEST_Environment_page()"
});
formatter.result({
  "duration": 1073280200,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Login to My Account with multiple users",
  "description": "",
  "id": "login-to-test-environment;login-to-my-account-with-multiple-users;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@MultipleUsers"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "User click on MyAccount",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User click on Login",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User enters username \u0027teacher@tekSchool.us\u0027 and Password \u0027teacher\u0027",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User Should be logged in to user Dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "loginStepDefiniton.user_click_on_MyAccount()"
});
formatter.result({
  "duration": 127718300,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefiniton.user_click_on_Login()"
});
formatter.result({
  "duration": 328830900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "teacher@tekSchool.us",
      "offset": 22
    },
    {
      "val": "teacher",
      "offset": 58
    }
  ],
  "location": "loginStepDefiniton.user_enters_username_sdet_tekschool_us_and_Password_sdet(String,String)"
});
formatter.result({
  "duration": 293306200,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefiniton.user_click_on_Login_button()"
});
formatter.result({
  "duration": 241499400,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefiniton.user_Should_be_logged_in_to_user_Dashboard()"
});
formatter.result({
  "duration": 7457100,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Account Login]\u003e but was:\u003c[My Account]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat stepDefinitions.loginStepDefiniton.user_Should_be_logged_in_to_user_Dashboard(loginStepDefiniton.java:57)\r\n\tat ✽.Then User Should be logged in to user Dashboard(Features/Login.feature:21)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 703824300,
  "status": "passed"
});
formatter.before({
  "duration": 1848256000,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on TEST Environment page",
  "keyword": "Given "
});
formatter.match({
  "location": "loginStepDefiniton.user_is_on_TEST_Environment_page()"
});
formatter.result({
  "duration": 1146294200,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Login to My Account with multiple users",
  "description": "",
  "id": "login-to-test-environment;login-to-my-account-with-multiple-users;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@MultipleUsers"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "User click on MyAccount",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User click on Login",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User enters username \u0027consumer@tekschool.us\u0027 and Password \u0027JBond\u0027",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User Should be logged in to user Dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "loginStepDefiniton.user_click_on_MyAccount()"
});
formatter.result({
  "duration": 134392700,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefiniton.user_click_on_Login()"
});
formatter.result({
  "duration": 258797000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "consumer@tekschool.us",
      "offset": 22
    },
    {
      "val": "JBond",
      "offset": 59
    }
  ],
  "location": "loginStepDefiniton.user_enters_username_sdet_tekschool_us_and_Password_sdet(String,String)"
});
formatter.result({
  "duration": 300336500,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefiniton.user_click_on_Login_button()"
});
formatter.result({
  "duration": 314151500,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefiniton.user_Should_be_logged_in_to_user_Dashboard()"
});
formatter.result({
  "duration": 7598000,
  "status": "passed"
});
formatter.after({
  "duration": 732064900,
  "status": "passed"
});
});