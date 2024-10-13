# Playwright Test Project

## Overview

This project is a test automation suite built using [Playwright](https://playwright.dev/), aimed at ensuring the functionality and reliability of web applications. It includes a series of automated tests that cover essential user interactions and verify the expected behavior of the application.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Requirements](#requirements)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Running Tests](#running-tests)
- [Reporting](#reporting)
- [Test Scenarios](#test-scenarios)
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
   git clone https://github.com/gadiim/23.09.24_cypress_project.git
   ```
2. Navigate into the project directory:
   ```bash
   cd 23.09.24_cypress_project
   ```
3. Install the required dependencies:
   ```bash
   npm install
   ```

## Running Tests

You can run tests in various ways:

- To open the Cypress Test Runner:
   ```bash
   npm run cypress:open
   ```
- To run all tests in headless mode:  
   ```bash
   npm run cypress:run
   ```
- To run tests in specific browsers:
   ```bash
   npm run cypress:run:chrome
   npm run cypress:run:firefox
   ```
- To run tests for specific test files:
  ```bash
   npm run test:footer
   npm run test:header
   npm run test:shop
   npm run test:header-nfs
   ```
## Test Structure

The tests are organized in the following structure:
   ```sql
   cypress/
├── e2e/
│   ├── test_footer_full-screen_spec.js
│   ├── test_header_full-screen_spec.js
│   ├── test_header_non-full-screen_spec.js
│   └── test_shop_full-screen_spec.js
└── fixtures/
   ```
Each test file contains specific test cases that validate various functionalities of the website.

## Configuration

The Cypress configuration is located in cypress.config.js. 

### Configuration:
```javascript
module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/**/*.js',
    viewportWidth: 1920,
    viewportHeight: 1080,
    video: false,
    retries: 1,
    screenshotOnRunFailure: true,
  },
});
```
### Contributing:

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create your feature branch (git checkout -b feature/YourFeature).
3. Commit your changes (git commit -m 'Add some feature').
4. Push to the branch (git push origin feature/YourFeature).
5. Open a pull request.

 ## License

 No license yet.
