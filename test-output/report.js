$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Login feature",
  "description": "",
  "id": "login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Login feature for free CRM",
  "description": "",
  "id": "login-feature;login-feature-for-free-crm",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page loaded fine",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 7,
      "value": "#Then user enters \"anumary053@gmail.com\" and \"Jobin@2021\""
    }
  ],
  "line": 8,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user is on home page",
  "keyword": "And "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "login-feature;login-feature-for-free-crm;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 13,
      "id": "login-feature;login-feature-for-free-crm;;1"
    },
    {
      "cells": [
        "anumary053@gmail.com",
        "Jobin@2021"
      ],
      "line": 14,
      "id": "login-feature;login-feature-for-free-crm;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "Login feature for free CRM",
  "description": "",
  "id": "login-feature;login-feature-for-free-crm;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page loaded fine",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 7,
      "value": "#Then user enters \"anumary053@gmail.com\" and \"Jobin@2021\""
    }
  ],
  "line": 8,
  "name": "user enters \"anumary053@gmail.com\" and \"Jobin@2021\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user is on home page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_already_on_login_page()"
});
formatter.result({
  "duration": 2620511500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_loaded_fine()"
});
formatter.result({
  "duration": 3210568300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "anumary053@gmail.com",
      "offset": 13
    },
    {
      "val": "Jobin@2021",
      "offset": 40
    }
  ],
  "location": "LoginStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 5252976700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 87077600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 21500,
  "status": "passed"
});
});