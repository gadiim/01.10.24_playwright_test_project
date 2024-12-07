![CI](https://github.com/gadiim/01.10.24_playwright_test_project/actions/workflows/ci.yml/badge.svg)

# Playwright Test Project

## Table of Contents
- [Overview](#overview)
- [Test-case](#test-case)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running Tests](#running-tests)
- [Test Result](#test-result)
- [Test Structure](#test-structure)
- [License](#license)

## Overview

This project is a test automation suite built using [Playwright](https://playwright.dev/), aimed at ensuring the functionality and reliability of [web-site](https://www.redmine.org). It includes a series of automated tests that cover essential user interactions and verify the expected behavior of the application.

## Test-case

You can find the test-case details [here](https://github.com/gadiim/01.10.24_playwright_test_project/blob/main/TEST-CASE.md).

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js**: Install [Node.js](https://nodejs.org/) (version 14 or higher).
- **Java**: Install [Java Development Kit (JDK)](https://www.oracle.com/java/technologies/javase/jdk23-archive-downloads.html) (version 11 or higher).
- **Playwright**: This project uses Playwright for browser automation. It will be installed as a dependency.
- **Allure**: Ensure you have installed Allure globally using the command:
  ```bash
  npm install -g allure-commandline
  ```

## Installation

To set up the project, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/gadiim/01.10.24_playwright_test_project.git
   cd 01.10.24_playwright_test_project
   ```
2. **Install Dependencies**: Run the following command to install the required Node.js packages:
   ```bash
   npm install
   ```
3. **Verify Java Installation**: Ensure that Java is correctly installed by running:
   ```bash
   java -version
   ```
4. **Run Playwright Install**: Playwright requires some browser binaries. Install them by running:
   ```bash
   npm run playwright:install
   ```

## Running Tests

You can now run the tests with the following command:
- To open the Playwright Test Runner:
   ```bash
   npm run test
   ```
- To run tests for specific test files:
  ```bash
   npm run test:registration
  ```
  ```bash
   npm run test:login
  ```
  ```bash
   npm run test:visibility
  ```
  ```bash
   npm run test:сlicks
  ```
  ```bash
   npm run test:shop
  ```
- To run tests for specific test files in Headed Mode:
  ```bash
   npm run test:registration -- --headed
  ```
  ```bash
   npm run test:login -- --headed
  ```
  ```bash
   npm run test:visibility -- --headed
  ```
  ```bash
   npm run test:сlicks -- --headed
  ```
  ```bash
   npm run test:shop -- --headed
   ```
  
**Generate Allure Reports**

To generate Allure reports after running the tests, use the following commands:
1. Generate the Allure report:
   ```bash
   npm run test:report
   ```

2. Open the Allure report in your default web browser:
   ```bash
   npm run allure:open
   ```

**Test in interactive mode** , which allows you to better understand where exactly the problem occurs:
   ```bash
   npx playwright test --debug
   ```

## Test Result

The project utilizes GitHub Pages for hosting and displaying the test reports. You can view the test reports [here](https://gadiim.github.io/01.10.24_playwright_test_project/)

## Test Structure

The tests are organized in the following structure:
   ```sql
01.10.24_playwright_test_project/
├── pages/
│   ├── registrationPage.js     -- Methods for the registration page
│   ├── loginPage.js            -- Methods for the login page
│   ├── productPage.js          -- Methods for the product page
│   └── homePage.js             -- Methods for the home page
├── screenshots/                -- Directory for test screenshots
├── tests/
│   ├── tc_001.spec.js          -- Tests user registration functionality
│   ├── tc_002.spec.js          -- Tests login attempts by unregistered users
│   ├── tc_003.spec.js          -- Verifies visibility of various blocks on the home page
│   ├── tc_004.spec.js          -- Clicks on all items in the main menu
│   └── tc_005.spec.js          -- Add book to cart and verify
└── utils/
    └── dataGenerator.js        -- Utility for generating random user data
   ```

 ## License

This project is licensed under the MIT License. You are free to use, modify, and distribute this project. See the [LICENSE](./LICENSE) file for more details.
MIT License
```plaintext
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.




