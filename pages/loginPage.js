//Constructor Class for the Loginpage
import { expect } from "@playwright/test";

export class LoginPage {
    constructor(page) {
        this.page = page;

        this.usernameInput = page.locator('#username');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator("button[type='submit']");
        this.flashMessage = page.locator('#flash');
    }

  //Method to go to page
    async goto() {
        await this.page.goto('https://the-internet.herokuapp.com/login');
    }

  //Login method
    async login(username, password) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async expectFlashMessageContains(text) {
        await expect(this.flashMessage).toContainText(text);
    }

    async expectLoginFormVisible() {
        await expect(this.usernameInput).toBeVisible();
        await expect(this.passwordInput).toBeVisible();
  } 
}