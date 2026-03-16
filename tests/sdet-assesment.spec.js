import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';


// Go to page before each test
test.describe('Login Tests', () =>{

    let loginPage;

    test.beforeEach(async ({page}) =>{

        loginPage = new LoginPage(page);
        await loginPage.goto();
    })

    test('Test Case 1: Successful login', async ({page}) =>{

        //Login with correct credentials
        await loginPage.login('tomsmith', 'SuperSecretPassword!');
        
        //Verifying if the user is in the correct URL and the success message show up
        await expect(page).toHaveURL('https://the-internet.herokuapp.com/secure');
        await loginPage.expectFlashMessageContains('You logged into a secure area!');
    })

    test('Test Case 2: Login with invalid username', async ({page}) =>{

        //Login with wrong username but correct password
        await loginPage.login('samsmith', 'SuperSecretPassword!');

        //Verifying if the user is in the correct URL, the correct failure message show up and the fields are visible
        await expect(page).toHaveURL('https://the-internet.herokuapp.com/login');
        await loginPage.expectFlashMessageContains('Your username is invalid!');
        await loginPage.expectLoginFormVisible();
    })

    test('Test Case 3: Login with invalid password', async ({page}) =>{

        //Login with correct username but wrong password
        await loginPage.login('tomsmith', 'UltraSecretPassword!');

        //Verifying if the user is in the correct URL, the correct failure message show up and the fields are visible
        await expect(page).toHaveURL('https://the-internet.herokuapp.com/login');
        await loginPage.expectFlashMessageContains('Your password is invalid!');
        await loginPage.expectLoginFormVisible();
    })
})