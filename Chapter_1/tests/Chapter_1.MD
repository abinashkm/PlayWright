
## INTRODUCTION

Playwright is an automation tool used for testing both **UI and API**.  
It supports both types of testing in a single framework.

---

## Difference Between Playwright and Selenium

| Situation | Playwright | Selenium |
|----------|-----------|----------|
| Speed | Fast | Slow |
| Setup | Easy | Many steps |
| Waiting for pages | Waits automatically | You have to handle waits manually |
| New features | Modern | Older |
| Multiple tabs | Easy | Hard |
| API + UI together | Built-in support | Not supported |

---

## Simple Real-Life Example

You say:  
**"Open YouTube and click a video"**

### Selenium:
- Opens site  
- Clicks too early → fails  
- You must add: wait, wait, wait  

### Playwright:
- Opens site  
- Waits automatically  
- Clicks at the right time  
- Works smoothly  

---

## INSTALLATION

Go to your project folder:
```bash
cd folder_name

Run the following command in VS Code terminal:

npm init playwright@latest

This command:

Initializes a new Playwright project
OR adds Playwright to an existing project
Installs required packages and browser drivers
Playwright Extension
Install the Playwright extension in VS Code (Flask icon)
The tests shown there are configured via playwright.config.ts

If tests are not visible:

They may not be inside the tests folder
OR there could be an issue in playwright.config.ts
Running Tests

Run all tests using terminal:

npx playwright test
Viewing Reports

To open the test report:

npx playwright show-report