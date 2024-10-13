# Playwright Test Project

## Overview

This project is a test automation suite built using [Playwright](https://playwright.dev/), aimed at ensuring the functionality and reliability of web applications. It includes a series of automated tests that cover essential user interactions and verify the expected behavior of the application.

## Table of Contents
- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running Tests](#running-tests)
- [Test Structure](#test-structure)
- [Contributing](#contributing)
- [License](#license)


## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js**: Install [Node.js](https://nodejs.org/) (version 14 or higher).
- **Java**: Install [Java Development Kit (JDK)](https://www.oracle.com/java/technologies/javase/jdk23-archive-downloads.html) (version 11 or higher).
- **Playwright**: This project uses Playwright for browser automation. It will be installed as a dependency.
- **Allure**: Ensure you have installed Allure globally using the command:
  ```bash
  npm install -g allure-commandline

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
   npx playwright install
   ```

## Running Tests

You can now run the tests with the following command:
- To open the Playwright Test Runner:
   ```bash
   npx playwright test
   ```
- To run tests for specific test files:
  ```bash
   npm run test:registration
   npm run test:login
   npm run test:visibility
   npm run test:сlicks
   npm run test:shop
   ```
  
**Generate Allure Reports**

To generate Allure reports after running the tests, use the following commands:
1. Generate the Allure report:
   ```bash
   npm run test:report
   ```

2. Open the Allure report in your default web browser:
   ```bash
   npx allure open
   ```
   
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
Each test file contains specific test cases that validate various functionalities of the website.

## Configuration

The Playwright test configuration is defined in the `playwright.config.js` file. Key settings include:

- **Test Directory**: Tests are located in the `./tests` folder.
- **Parallel Execution**: Tests run in parallel for efficiency.
- **Retries**: Tests retry up to 2 times on CI if they fail.
- **Reporters**: Configured to generate HTML and Allure reports.
- **Browser Configuration**: Set up for testing in Chromium.

For more details, refer to the `playwright.config.js` file in the project.

### Contributing:

Please follow these steps to contribute:

1. **Fork the Repository**: Click the "Fork" button in the top right corner of the repository page to create your own copy.

2. **Clone Your Fork**: Clone your forked repository to your local machine using:
   ```bash
   git clone https://github.com/your-username/01.10.24_playwright_test_project.git
   ```
   Replace your-username with your GitHub username.

3. **Create a Branch**: Create a new branch for your feature or bug fix:
   ```bash
   git checkout -b your-feature-branch
   ```

4. **Make Changes**: Implement your changes in the codebase.

5. **Test Your Changes**: Ensure all tests pass before submitting your changes. You can run the tests using:
   ```bash
   npx playwright test
   ```

6. **Commit Your Changes:**: Add and commit your changes:
   ```bash
   git add .
   git commit -m "Add a meaningful commit message"
   ```
 
7. **Push to Your Fork:**: Push your changes back to your forked repository:
   ```bash
   git push origin your-feature-branch
   ```     
8. **Create a Pull Request**: Go to the original repository and click on the "Pull Requests" tab. Click "New Pull Request" and select your branch. Provide a description of your changes and submit the pull request.

 ## License

 No license yet.
