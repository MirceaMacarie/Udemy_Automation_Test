# Udemy Automation Test
This is an automation testing project for various technical functionalities of the Udemy course platform, the main learning site where I studied and learned Software Testing (QA).



------



## :pushpin: Inspiration and personal purpose :chart_with_upwards_trend:
This automation project was created to practice personal automation skills and to develop a more complex suite of automated tests that imitate as closely as possible the flow of a normal user on the platform (ex: login, search through sections, search in the search box, select results, add to wishlist or in the cart, logout).







## :pushpin: Project technologies :computer:
+ **JavaScript** as programming language
+ **Node.js** as runtime environment
+ **WebdriverIO** as automation framework for web applications
+ **Google Chrome** as test browser, with chromedriver

    <a href= "https://developer.mozilla.org/en-US/docs/Web/JavaScript"><img src="https://user-images.githubusercontent.com/115346533/207126821-44c69b50-e31e-47cf-807d-360653372d09.png" width="91" height="91"></a>     <a href= "https://nodejs.org/en/docs/"><img src="https://user-images.githubusercontent.com/115346533/207125973-3188c005-11c9-4c49-ab8c-b71e5c58a5c4.png" width="80" height="91"></a>     <a href= "https://webdriver.io/"><img src="https://user-images.githubusercontent.com/115346533/207128580-5f3dd3bc-44f7-49dc-8cdb-a4991368536a.png" width="80" height="91"></a>     <a href = "https://www.google.com/chrome/?brand=YTUH&gclid=Cj0KCQiAnsqdBhCGARIsAAyjYjThEbMgK-Pyt6tXBBxBf9wk8TAD19OKn0FRnMlz45Ul0fZ5ogPb9gEaAjOhEALw_wcB&gclsrc=aw.ds"><img src="https://user-images.githubusercontent.com/115346533/208242996-fae0e828-b968-45cd-ab0c-1a73c9825b65.png" width="91" height="91"></a>
    
    
    
    
   
   
## :pushpin: Setup and installation :hammer_and_wrench:	
1. Iniatially I created a remote repository on GitHub, then a local repository on my computer.
2. In the project's local folder, I installed the WebdriverIO automatic testing framework from the Command Terminal, by executing the command: "npm init wdio .".
3. Before the final installation of the drivers required for automated testing, I had to configure WebdriverIO by choosing certain options in the form in Terminal: selecting the base URL, using Google Chrome with chromedriver, setting the specific location where the files are located of the JavaScript test code ("./test/specs/**/*.js"), changing the command to run the test in the configuration file to "npm test".
4. After I have finished installing the necessary files, I open a JS code file in the "test/specs" folder and add the unitary organized test suite with proper names for all the tests in it, following the documentation of the WebdriverIO framework.
5. The automated test suite is executed by running the "npm test" command in the Command Terminal.






## :pushpin: Web support :link:
As support, I used **the website https://www.udemy.com/** for these automation test.






## :pushpin: Testing objectives :microscope:
This project was thought as a way to:
+ to check the **general functionality of the website**
+ to think and develop **automatic tests that imitate the flow of a normal user** accessing the site
+ to check **certain static details (buttons, titles, text, etc.)**.






## :pushpin: The automated tests and their theoretical execution :clipboard:
:bangbang: For technical and security reasons, Udemy's official website is protected from automatic access by various such frameworks, like WebdriverIO.
Therefore, **running and video recording of the automated test suite execution was not possible.** The automated tests that were to be run are listed below:

1. **"Should have the correct page title"**
  + Open the main page of the website
  + Verify if the Login page has a specific title
  + Closed the pop-up window for cookies by clicking OK button
 
2. **"Should change the language of the website"**
  + Change the language of the website from Romanian to English (languages, then English button)
  
3. **"Should login with correct credentials"**
  + Click on the Log in Button
  + Set the email in the Email input
  + Set the Password in the Password input
  + Pause the execution of the test for 2 seconds
  + After checking the reCAPTCHA button, click on the Login button
  
4. **"Should have the correct Title for main page"**
  + Check if the main page after log in has the correct title
  
5. **"Should verify the button for Finance & Accounting section"**
  + It is expected the Finance & Accounting button to be displayed for users
  + The Finance & Accounting button should work properly
  + Pause the execution of the test for 2 seconds
  
6. **"Should verify the button for Personal Development section"**
  + Navigate to the previous webpage of the site
  + It is expected the Personal Development button to be displayed for users
  + The Personal Development button should work properly
  + Verify one of the next section, Career Development button
  + Pause the execution of the test for 2 seconds
  
7. **"Should verify the search box"**
  + Search in the specific box 'front end' and see the results
  + Scroll down the results page and select Beginner level and >4,5 rating criteria
  
8. **"Should select one course at a time from the list of results"**
  + Click on a course from the list, page back, then select another ( x3 times)
  
9. **"Should add the selected course to Wishlist"**
  + Click on the button to add the course to the Favorite list
  + Click to see the complete list with Favourite
  
10. **"Should select a course from Wishlist and add to Cart"**
  + Click on the button to add the course to the Cart
  + Remove the selected course from Cart
  
11. **"Should log out from the website"**
  + At the end of the test, click on the Logout button
  + Close the open browser window
