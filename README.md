# SDET Take-Home Assessment – Playwright

## Overview
This project contains automated tests for the login functionality of the demo application:

https://the-internet.herokuapp.com/login

The tests were implemented using **Playwright with JavaScript** and follow the **Page Object Model (POM)** design pattern to keep the test code clean, reusable, and maintainable.

## Technology Stack
- Playwright
- JavaScript
- Node.js

## Test Scenarios

### Positive Test
1. **Successful Login**
   - Navigate to login page
   - Enter valid credentials
   - Verify user is redirected to the secure area
   - Verify success message appears

### Negative Tests
2. **Login with Invalid Username**
   - Navigate to login page
   - Enter invalid username and valid password
   - Verify error message appears
   - Verify user remains on login page

3. **Login with Invalid Password**
   - Navigate to login page
   - Enter valid username and invalid password
   - Verify error message appears
   - Verify user remains on login page

## Project Structure
project-root
│
├── pages
│ └── loginPage.js # Page Object Model for login page
│
├── tests
│ └── sdet-assessment.spec.js # Test cases
│
├── playwright.config.js # Playwright configuration
├── package.json # Project dependencies and scripts
└── README.md # Project documentation


## Prerequisites

Make sure the following are installed:

- Node.js
- npm

Verify installation:
node -v
npm -v


## Installation

Clone the repository and install dependencies:
npm install

Install Playwright browsers:
npx playwright install


## Running the Tests

Run all tests:
npx playwright test


Run tests in headed mode (visible browser):
npx playwright test --headed

Run tests in headed mode with only chromium browser
npx playwright test --headed --project=chromium

Open the Playwright HTML report:
npx playwright show-report