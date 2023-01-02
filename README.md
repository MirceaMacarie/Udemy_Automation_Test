# Udemy Automation Test
This is an automation testing project for various technical functionalities of the Udemy course platform, the main learning site where I studied and learned Software Testing (QA).



------



## :pushpin: Inspiration and personal purpose :chart_with_upwards_trend:
This automation project was created to practice personal automation skills and to develop a more complex suite of automated tests that mimic as closely as possible the flow of a normal user on the platform (ex: login, search through sections, search in the search box, select results, add to wishlist or in the cart, logout).







## :pushpin: Project technologies :computer:
+ **JavaScript** as programming language
+ **Node.js** as runtime environment
+ **Webdriver.io** as automation framework for web applications
+ **Google Chrome** as test browser, with chromedriver

    <a href= "https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"><img src="https://user-images.githubusercontent.com/115346533/207126821-44c69b50-e31e-47cf-807d-360653372d09.png" width="91" height="91"></a>     <a href= "https://nodejs.org/en/docs/"><img src="https://user-images.githubusercontent.com/115346533/207125973-3188c005-11c9-4c49-ab8c-b71e5c58a5c4.png" width="80" height="91"></a>     <a href= "https://webdriver.io/"><img src="https://user-images.githubusercontent.com/115346533/207128580-5f3dd3bc-44f7-49dc-8cdb-a4991368536a.png" width="80" height="91"></a>     <a href = "https://www.google.com/chrome/?brand=YTUH&gclid=Cj0KCQiAnsqdBhCGARIsAAyjYjThEbMgK-Pyt6tXBBxBf9wk8TAD19OKn0FRnMlz45Ul0fZ5ogPb9gEaAjOhEALw_wcB&gclsrc=aw.ds"><img src="https://user-images.githubusercontent.com/115346533/208242996-fae0e828-b968-45cd-ab0c-1a73c9825b65.png" width="91" height="91"></a>
    
    
    
    
   
   
## :pushpin: Setup and installation :hammer_and_wrench:	
1. The first time I created a remote repository on GitHub, then a local repository on my computer.
2. In the project's local folder, I installed the Webdriver.io automatic testing framework from the Command Terminal, by executing the command: "npm init wdio .".
3. Before the final installation of the drivers required for automated testing, I had to configure Webdriver.io by choosing certain options in the form in Terminal: selecting the base URL, using Google Chrome with chromedriver, setting the specific location where the files are located of the JavaScript test code ("./test/specs/**/*.js"), changing the command to run the test in the configuration file to "npm test".
4. After we have finished installing the necessary files, I open a JS code file in the "test/specs" folder and add the unitary organized test suite with proper names for all the tests in it, following the documentation of the Webdriver.io framework.
5. The automated test suite is executed by running the "npm test" command in the Command Terminal.






## :pushpin: Web support :link:
As support, I used **the website https://www.udemy.com/** for these automation test.






## :pushpin: Testing objectives :microscope:
This project was thought as a way to:
+ to check the **general functionality of the website**
+ to think and develop **automatic tests that imitate the flow of a normal user** accessing the site
+ to check **certain static details (buttons, titles, text, etc.)**.






## :pushpin: Demo videos of the Automation test :clapper:
A **short video** on how this automated test works and what are the checked points.











