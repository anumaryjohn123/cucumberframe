Feature: Login feature

Scenario Outline: Login feature for free CRM

Given user is already on login page
When title of login page loaded fine
#Then user enters "anumary053@gmail.com" and "Jobin@2021"
Then user enters "<username>" and "<password>"
And user clicks on login button
And user is on home page

Examples:
| username | password |
|anumary053@gmail.com| Jobin@2021 |

Scenario Outline: User on new contacts page

Given user is already on login page
When title of login page loaded fine
Then user enters "<username>" and "<password>"
And user clicks on login button
Then user moves to new contact page
Then user enters now "<firstname>" and "<lastname>" and "<position>"

Examples:
| username | password |firstname| lastname| postion|
|anumary053@gmail.com| Jobin@2021 |anu| jobin| 1|
