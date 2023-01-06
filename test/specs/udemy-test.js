describe('Udemy.com', () => {

    it('should have the correct page title', async () => {

        // Open the main page of the website
        await browser.url('https://www.udemy.com/');

        // Verify if the Login page has a specific title
        await expect(browser).toHaveTitle('Cursuri online - Învață orice, în ritmul tău | Udemy');

        // Closed the pop-up window for cookies by clicking OK button
        const okButton = await $('#onetrust-accept-btn-handler');
        await okButton.click();
    });


   it('should change the language of the website', async () => {
        const languageButton = await $('//*[@id="udemy"]/div[1]/div[1]/div[3]/div[8]/button');
        const englishButton = await $('#udemy > div.modal--dialog-container--2EErf > div > div.udlite-in-udheavy.language-selector-modal-trigger--modal--3teju.ud-modal.modal--dialog--5dCiA.modal--default-size--399MX > div.language-list--multi-column--3jwlU > a:nth-child(1)');

        // Change the language of the website from Romanian to English
        await languageButton.click();
        await englishButton.click();
    });


   it('should login with correct credentials', async () => {
        const loginButton = await $('#udemy > div.ud-main-content-wrapper > div.ud-app-loader.ud-component--header-v6--header.ud-header.ud-app-loaded > div.ud-text-sm.header--header--1SLKV.header--flex-middle--2QeVR > div:nth-child(8) > a');
        const nameButton = await $('#form-group--1');
        const passwordButton = await $('#form-group--3');
        const loginAuthButton = await $('#udemy > div.ud-main-content-wrapper > div.ud-main-content > div > div > div:nth-child(2) > div > div > div > form > button');

        // Click on the Log in Button
        await loginButton.click();

        // Set the email in the Email input
        await nameButton.setValue('mg_mircea@yahoo.ro');

        // Set the Password in the Password input
        await passwordButton.setValue('Udemy.com'); // From security reasons, the real password is not written in the final code

        // Pause the execution of the test for 2 seconds
        await browser.pause(2000);

        // After checking the reCAPTCHA button, click on the Login button
        await loginAuthButton.click();
    });


    it('should have the correct Title for main page', async () => {

        // The main page after log in should have the correct title
        await expect(browser).toHaveTitle('Cursuri online - Învață orice, în ritmul tău | Udemy');
    });


    it('should verify the button for Finance & Accounting section', async () => {
        const financeButton = await $('.ud-btn ud-btn-medium ud-btn-ghost ud-heading-sm link-bar--nav-button--3uJ__');

        // It is expected the Finance & Accounting button to be displayed for users
        await expect(financeButton).toBeDisplayed;

        // The Finance & Accounting button should work properly
        await financeButton.click();

        // Pause the execution of the test for 2 seconds
        await browser.pause(2000);
    });


    it('should verify the button for Personal Development section', async () => {
        
        // Navigate to the previous webpage of the site
        browser.back();
        const persDevButton = await $('.ud-btn ud-btn-medium ud-btn-ghost ud-heading-sm link-bar--nav-button--3uJ__');

        // It is expected the Personal Development button to be displayed for users
        await expect(persDevButton).toBeDisplayed;

        // The Personal Development button should work properly
        await persDevButton.click();

        // Verify one of the next section, Career Development button
        const careerDevButton = await $('//*[@id="udemy"]/div[1]/div[2]/div/nav/ul/li[2]/a');
        await careerDevButton.click();

        // Pause the execution of the test for 2 seconds
        await browser.pause(2000);
    });


    it('should verify the search box', async () => {
        const searchBox = await $('#u74-search-form-autocomplete--3');
        const searchButton = await $('.ud-btn ud-btn-large ud-btn-ghost ud-heading-md ud-btn-icon ud-btn-icon-large');
        const ratingButton = await $('#u26-radio--2560');
        const levelExpandButton = await $('#u26-accordion-panel-title--2636');
        const beginnerLevelButton = await $('#u26-checkbox--2639');

        // Search in the specific box 'front end' and see the results
        await searchBox.setValue('front end');
        await searchButton.click();

        // Scroll down the results page and select Beginner level and >4,5 rating criteria
        await ratingButton.click();

        await browser.scroll(0, 200);

        await levelExpandButton.click();
        await beginnerLevelButton.click();
     });


   it('should select one course at a time from the list of results', async () => {
        const firstCourseButton = await $('//*[@id="u26-popper-trigger--3714"]/div[2]');
        const secondCourseButton = await $('//*[@id="u26-popper-trigger--3717"]/div[2]');
        const thirdCourseButton = await $('//*[@id="u26-popper-trigger--3720"]/div[2]');

        // Click on a course from the list, page back, then select another
        await firstCourseButton.click();
        browser.back();
        await browser.pause(1000);

        await thirdCourseButton.click();
        browser.back();
        await browser.pause(1000);

        await secondCourseButton.click();
        browser.back();
     });

    it('should add the selected course to Wishlist', async () => {
        const wishButton = await $('.ud-btn ud-btn-large ud-btn-secondary ud-heading-md ud-btn-icon ud-btn-icon-large');
        const wishlistButton = await $('#u41-popper-trigger--146');

        // Click on the button to add the course to the Favorite list
        await wishButton.click();

        // Click to see the complete list with Favourite
        await wishlistButton.click();
     }); 
     
     it('should select a course from Wishlist and add to Cart', async () => {
        const courseButton = await $('.course-card--image-wrapper--1F9ny');
        const cartButton = await $('.ud-btn ud-btn-large ud-btn-brand ud-heading-md add-to-cart');
        const goToCartButton = await $('.ud-btn ud-btn-large ud-btn-primary ud-heading-md styles--go-to-cart--2K-KE');

        // Click on the button to add the course to the Cart
        await courseButton.click();
        await cartButton.click();
        await goToCartButton.click();
        await browser.pause(1000);

        // Remove the selected course from Cart
        const removeButton = await $('.ud-btn ud-btn-xsmall ud-btn-ghost ud-text-sm');
        await removeButton.click();
        await browser.pause(1000);
     });


   it('should log out from the website', async () => {
        const profileButton = await $('.user-profile-dropdown--dropdown-button-avatar--kTGSm ud-avatar ud-heading-sm');
        const logoutButton = await $('.ud-block-list-item-content');

        // At the end of the test, click on the Logout button
        browser.elementHover(profileButton);
        await logoutButton.click();
        await browser.pause(1000);

        // Close the open browser window
        browser.closeWindow();
     })
});