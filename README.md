# ndosi_profile_automation
Production-grade E2E and API test automation suite built with Playwright (TypeScript) utilizing the Page Object Model architecture. Features automated profile picture uploads, UI/API response validations, HTML reporting, and nightly CI/CD execution via GitHub Actions.


```python
markdown_content = """# Playwright E2E & API Test Automation Framework

![Playwright Tests](https://github.com/your-username/playwrightE2eAutomation/actions/workflows/nightly-e2e-tests.yml/badge.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)
![Playwright](https://img.shields.io/badge/Playwright-1.40+-green?logo=playwright)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-CI%2FCD-2088FF?logo=githubactions)

A production-grade, end-to-end (E2E) and REST API test automation suite built with **Playwright** and **TypeScript** using the **Page Object Model (POM)** design pattern. 

This repository automates user authentication, profile management, and media uploads on the Ndosi Automation platform while concurrently verifying back-end API endpoint response codes. The pipeline runs automatically every night on **GitHub Actions**.

---

## 📌 Project Overview & Scope

The testing suite validates critical web application workflows across both UI and network layers:

### **UI Automation**
1. **Authentication:** Secure user login session initialization.
2. **Navigation:** Dynamic routing via navigation menus to the **My Profile** page.
3. **Profile Modification:** Navigating into profile edit mode and performing dynamic profile picture file uploads.
4. **Visual Assertion:** Validating DOM state changes and file update confirmations.

### **API Automation & Validation**
1. **Endpoint Discovery:** Intercepting and mapping underlying REST API endpoints triggered during UI navigation and media uploads.
2. **Response Code Assertion:** Verifying HTTP response statuses (`200 OK`, `201 Created`, etc.) across all identified network endpoints.

---

## 🛠️ Tech Stack & Tools

* **Language:** TypeScript
* **Test Runner / Automation:** Playwright
* **Design Architecture:** Page Object Model (POM)
* **CI/CD Orchestration:** GitHub Actions
* **Reporting & Visual Artifacts:** Native HTML Reporter, Playwright Trace Viewer, Automated Screenshots

---

## 📁 Repository Structure

```text
├── .github/
│   └── workflows/
│       └── nightly-e2e-tests.yml   # CI/CD pipeline configuration (Cron scheduled)
├── src/
│   ├── api/
│   │   └── ProfileApiClient.ts     # API request abstractions & endpoint validations
│   └── pages/
│       ├── BasePage.ts             # Foundational UI wrapper & common interactions
│       ├── LoginPage.ts            # Page Object: User Authentication
│       └── UserProfilePage.ts      # Page Object: Profile modification & image upload
├── tests/
│   ├── e2e/
│   │   └── user-profile.spec.ts    # End-to-End UI user workflows
│   └── api/
│       └── profile-endpoints.spec.ts # REST API HTTP response code assertions
├── fixtures/
│   └── test-data/
│       └── sample-avatar.png       # Test image fixture for file uploads
├── .gitignore
├── package.json
├── playwright.config.ts            # Global framework configuration & browser settings
└── README.md                       # Project documentation

```

---

## 🚀 Getting Started

### Prerequisites

* **Node.js**: v18.x or higher
* **npm**: v9.x or higher

### Installation

1. **Clone the Repository**
```bash
git clone [https://github.com/your-username/playwrightE2eAutomation.git](https://github.com/your-username/playwrightE2eAutomation.git)
cd playwrightE2eAutomation

```


2. **Install Dependencies**
```bash
npm install

```


3. **Install Playwright Browsers**
```bash
npx playwright install --with-deps

```



---

## 🧪 Executing Tests

### Run All Tests (UI & API)

```bash
npx playwright test

```

### Run Tests in Headed Mode (Visual Inspection)

```bash
npx playwright test --headed

```

### Run Specific Test Suites

```bash
# Execute UI E2E tests only
npx playwright test tests/e2e/

# Execute API verification tests only
npx playwright test tests/api/

```

### Debugging Tests

```bash
npx playwright test --debug

```

---

## 📊 Reporting & Visual Screenshots

Playwright automatically captures failure screenshots, visual traces, and execution summaries upon completion.

### View HTML Test Report

```bash
npx playwright show-report

```

### Trace Viewer Analysis

Inspect detailed execution traces, network request payloads, and DOM snapshots:

```bash
npx playwright show-trace test-results/

```

---

## 🔄 CI/CD Pipeline & Schedule

The suite is configured using **GitHub Actions** (`.github/workflows/nightly-e2e-tests.yml`).

* **Schedule Trigger:** Configured to execute daily at **00:00 SAST (South Africa Standard Time)** / `22:00 UTC`.
* **Manual Execution:** Supports `workflow_dispatch` for on-demand manual pipeline runs directly from the GitHub repository UI.
* **Artifact Retention:** Automatically generates and publishes HTML reports and screenshots as downloadable pipeline artifacts.

### Pipeline Configuration Example (`nightly-e2e-tests.yml`)

```yaml
name: Nightly E2E & API Test Execution

on:
  schedule:
    # 22:00 UTC corresponds to 00:00 SAST (UTC+2)
    - cron: '0 22 * * *'
  workflow_dispatch:

jobs:
  automation-tests:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Code
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 18
          cache: 'npm'

      - name: Install Dependencies
        run: npm ci

      - name: Install Playwright Browsers
        run: npx playwright install --with-deps

      - name: Execute Playwright Tests
        run: npx playwright test

      - name: Upload Test Report Artifacts
        if: always()
        uses: actions/upload-artifact@v4
        with:
          name: playwright-execution-report
          path: playwright-report/
          retention-days: 14

```

---

## ✉️ Author & Portfolio Contact

* **Developer:** Xolisile Zwane
* **Role:** Automation / QA Engineer
* **LinkedIn:** [Your LinkedIn Profile URL]
* **GitHub:** [https://github.com/your-username](https://www.google.com/search?q=https://github.com/your-username)
"""

with open("README.md", "w") as f:
f.write(markdown_content)

print("FILE_CREATED: README.md")

```

```text?code_stdout&code_event_index=1
FILE_CREATED: README.md


```

Your README file is ready
[file-tag: code-generated-file-0065637c-fdce-4cc7-9353-1c775d9fd872]

Here is the formatted Markdown content generated for your project's `README.md` file:

```markdown
# Playwright E2E & API Test Automation Framework

![Playwright Tests](https://github.com/your-username/playwrightE2eAutomation/actions/workflows/nightly-e2e-tests.yml/badge.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)
![Playwright](https://img.shields.io/badge/Playwright-1.40+-green?logo=playwright)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-CI%2FCD-2088FF?logo=githubactions)

A production-grade, end-to-end (E2E) and REST API test automation suite built with **Playwright** and **TypeScript** using the **Page Object Model (POM)** design pattern. 

This repository automates user authentication, profile management, and media uploads on the Ndosi Automation platform while concurrently verifying back-end API endpoint response codes. The pipeline runs automatically every night on **GitHub Actions**.

---

## 📌 Project Overview & Scope

The testing suite validates critical web application workflows across both UI and network layers:

### **UI Automation**
1. **Authentication:** Secure user login session initialization.
2. **Navigation:** Dynamic routing via navigation menus to the **My Profile** page.
3. **Profile Modification:** Navigating into profile edit mode and performing dynamic profile picture file uploads.
4. **Visual Assertion:** Validating DOM state changes and file update confirmations.

### **API Automation & Validation**
1. **Endpoint Discovery:** Intercepting and mapping underlying REST API endpoints triggered during UI navigation and media uploads.
2. **Response Code Assertion:** Verifying HTTP response statuses (`200 OK`, `201 Created`, etc.) across all identified network endpoints.

---

## 🛠️ Tech Stack & Tools

* **Language:** TypeScript
* **Test Runner / Automation:** Playwright
* **Design Architecture:** Page Object Model (POM)
* **CI/CD Orchestration:** GitHub Actions
* **Reporting & Visual Artifacts:** Native HTML Reporter, Playwright Trace Viewer, Automated Screenshots

---

## 📁 Repository Structure

```text
├── .github/
│   └── workflows/
│       └── nightly-e2e-tests.yml   # CI/CD pipeline configuration (Cron scheduled)
├── src/
│   ├── api/
│   │   └── ProfileApiClient.ts     # API request abstractions & endpoint validations
│   └── pages/
│       ├── BasePage.ts             # Foundational UI wrapper & common interactions
│       ├── LoginPage.ts            # Page Object: User Authentication
│       └── UserProfilePage.ts      # Page Object: Profile modification & image upload
├── tests/
│   ├── e2e/
│   │   └── user-profile.spec.ts    # End-to-End UI user workflows
│   └── api/
│       └── profile-endpoints.spec.ts # REST API HTTP response code assertions
├── fixtures/
│   └── test-data/
│       └── sample-avatar.png       # Test image fixture for file uploads
├── .gitignore
├── package.json
├── playwright.config.ts            # Global framework configuration & browser settings
└── README.md                       # Project documentation

```

---

## 🚀 Getting Started

### Prerequisites

* **Node.js**: v18.x or higher
* **npm**: v9.x or higher

### Installation

1. **Clone the Repository**
```bash
git clone [https://github.com/your-username/playwrightE2eAutomation.git](https://github.com/your-username/playwrightE2eAutomation.git)
cd playwrightE2eAutomation

```


2. **Install Dependencies**
```bash
npm install

```


3. **Install Playwright Browsers**
```bash
npx playwright install --with-deps

```



---

## 🧪 Executing Tests

### Run All Tests (UI & API)

```bash
npx playwright test

```

### Run Tests in Headed Mode (Visual Inspection)

```bash
npx playwright test --headed

```

### Run Specific Test Suites

```bash
# Execute UI E2E tests only
npx playwright test tests/e2e/

# Execute API verification tests only
npx playwright test tests/api/

```

### Debugging Tests

```bash
npx playwright test --debug

```

---

## 📊 Reporting & Visual Screenshots

Playwright automatically captures failure screenshots, visual traces, and execution summaries upon completion.

### View HTML Test Report

```bash
npx playwright show-report

```

### Trace Viewer Analysis

Inspect detailed execution traces, network request payloads, and DOM snapshots:

```bash
npx playwright show-trace test-results/

```

---

## 🔄 CI/CD Pipeline & Schedule

The suite is configured using **GitHub Actions** (`.github/workflows/nightly-e2e-tests.yml`).

* **Schedule Trigger:** Configured to execute daily at **00:00 SAST (South Africa Standard Time)** / `22:00 UTC`.
* **Manual Execution:** Supports `workflow_dispatch` for on-demand manual pipeline runs directly from the GitHub repository UI.
* **Artifact Retention:** Automatically generates and publishes HTML reports and screenshots as downloadable pipeline artifacts.

### Pipeline Configuration Example (`nightly-e2e-tests.yml`)

```yaml
name: Nightly E2E & API Test Execution

on:
  schedule:
    # 22:00 UTC corresponds to 00:00 SAST (UTC+2)
    - cron: '0 22 * * *'
  workflow_dispatch:

jobs:
  automation-tests:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Code
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 18
          cache: 'npm'

      - name: Install Dependencies
        run: npm ci

      - name: Install Playwright Browsers
        run: npx playwright install --with-deps

      - name: Execute Playwright Tests
        run: npx playwright test

      - name: Upload Test Report Artifacts
        if: always()
        uses: actions/upload-artifact@v4
        with:
          name: playwright-execution-report
          path: playwright-report/
          retention-days: 14

```

---

## ✉️ Author & Portfolio Contact

* **Developer:** Xolisile Zwane
* **Role:** Automation / QA Engineer
* **GitHub:** [https://github.com/your-username](https://www.google.com/search?q=https://github.com/your-username)

```

```
