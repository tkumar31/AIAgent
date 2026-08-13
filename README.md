# Playwright Test Project

A comprehensive Playwright test automation project for end-to-end testing.

## Project Structure

```
├── tests/                    # Test files directory
│   ├── example.spec.ts      # Example test file
│   └── fixtures/            # Test fixtures and utilities
├── playwright-report/        # HTML test reports (generated)
├── test-results/            # Test results (generated)
├── playwright.config.ts     # Playwright configuration
├── tsconfig.json            # TypeScript configuration
├── package.json             # Project dependencies
└── README.md                # This file
```

## Installation

```bash
npm install
```

## Running Tests

### Run all tests
```bash
npm test
```

### Run tests in headed mode (see browser)
```bash
npm run test:headed
```

### Run specific test file
```bash
npx playwright test tests/example.spec.ts
```

### Run tests in a specific browser
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

### Debug tests
```bash