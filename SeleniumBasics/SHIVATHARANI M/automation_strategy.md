# Test Automation Process, Lifecycle & Framework Types

# Task 1: Automation Decision and Test Case Selection

## 17. Criteria for Deciding Whether a Test Case Should Be Automated

Not every test case is suitable for automation. Before automating a test, QA engineers evaluate several criteria to determine whether automation will provide long-term value.

| Criteria                         | Explanation                                                                                                                        | Application to `POST /api/courses/`                                                                                                                                                   |
| -------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **1. Frequency of Execution**    | Test cases that are executed repeatedly are ideal for automation because they save time and effort.                                | The `POST /api/courses/` endpoint is executed during every regression cycle to verify course creation. Therefore, it is suitable for automation.                                      |
| **2. Regression Testing**        | Tests that must be executed after every code change should be automated to ensure existing functionality is not affected.          | Every time changes are made to the Course Management API, the course creation endpoint should be tested automatically to ensure it still returns **HTTP 201 Created**.                |
| **3. Stable Functionality**      | Features that do not change frequently are good candidates for automation because maintenance effort is low.                       | The course creation API is a core feature of the application and its functionality remains stable. Hence, automation is recommended.                                                  |
| **4. Repetitive Test Execution** | Test cases that require repetitive execution with the same steps should be automated.                                              | Creating courses with valid data involves the same sequence of steps every time, making it an ideal candidate for automation.                                                         |
| **5. Data-Driven Testing**       | Tests that require multiple sets of input data benefit greatly from automation because different datasets can be executed quickly. | The `POST /api/courses/` endpoint can be tested using multiple course names, course codes, departments and credit values. Automation simplifies testing these different combinations. |



## 18. Test Case Selection – Automate or Manual

The following table classifies each test case as either **Automate** or **Manual**, along with the justification.

| Test Case                                                                 | Decision     | Justification                                                                                                                                                                                            |
| ------------------------------------------------------------------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **a) Regression test for all CRUD endpoints after every code change**     | **Automate** | Regression tests are executed after every code modification. Automating them saves significant time and ensures existing functionality continues to work correctly.                                      |
| **b) Exploratory testing of a new search feature**                        | **Manual**   | Exploratory testing requires human creativity, observation and critical thinking. It cannot be effectively automated.                                                                                    |
| **c) Performance test: 100 concurrent users calling GET `/api/courses/`** | **Automate** | Performance testing requires repeated execution with many virtual users. Automation tools can simulate concurrent users efficiently.                                                                     |
| **d) UI test for the login form**                                         | **Automate** | Login functionality is a stable and frequently used feature. Automating login verification ensures the authentication process works after every build.                                                   |
| **e) Verify the API documentation (Swagger) is accurate**                 | **Manual**   | Documentation usually requires human review to verify descriptions, examples and readability. Although some API contract checks can be automated, documentation accuracy is typically reviewed manually. |
| **f) Smoke test: Verify the API is reachable after deployment**           | **Automate** | Smoke tests are executed after every deployment to confirm the application is available. Automation provides immediate feedback and supports continuous integration.                                     |

### Summary

| Testing Activity           | Recommended Approach |
| -------------------------- | -------------------- |
| Regression Testing         | Automate             |
| Exploratory Testing        | Manual               |
| Performance Testing        | Automate             |
| Login UI Testing           | Automate             |
| Documentation Verification | Manual               |
| Smoke Testing              | Automate             |


---

## 19. Test Automation ROI (Return on Investment)

### Definition

**Test Automation ROI (Return on Investment)** is a metric used to determine whether the time, cost, and effort spent on automating a test case provide long-term benefits compared to executing the same test manually.

Automation becomes valuable when the cumulative time saved from repeated executions exceeds the initial automation development effort.

---

### Given

| Parameter                                     | Value                                    |
| --------------------------------------------- | ---------------------------------------- |
| Time required to automate one regression test | **4 hours (240 minutes)**                |
| Time required to execute manually             | **30 minutes per execution**             |
| Maintenance overhead after the 10th run       | **20% of manual execution time per run** |

---

### Step 1: Calculate the Break-Even Point

Automation Development Time

```text
4 hours = 240 minutes
```

Manual Execution Time

```text
30 minutes per run
```

Break-even Formula

```text
Break-even Runs = Automation Time ÷ Manual Execution Time
```

Calculation

```text
= 240 ÷ 30

= 8 Runs
```

### Result

The automation pays for itself after **8 executions**.

After the eighth execution, the total manual execution time becomes greater than the automation development effort.

---

### Step 2: Maintenance Overhead

After the **10th execution**, maintenance is required.

Maintenance Overhead

```text
20% × 30 minutes

= 6 minutes per run
```

Therefore,

For every execution after the 10th run,

Automation Time Required

```text
Execution Time + Maintenance

= 30 + 6

= 36 minutes
```

Although maintenance introduces additional effort, automation still provides significant long-term savings because regression tests are executed repeatedly throughout the software development lifecycle.


## 20. Flaky Tests

### Definition

A **Flaky Test** is an automated test that sometimes **passes** and sometimes **fails** without any changes to the application or test code.

Flaky tests reduce confidence in the automation suite because testers cannot determine whether failures are caused by genuine defects or unstable tests.

### Example

Suppose a Selenium test automates the following steps:

1. Open the Course Management login page.
2. Enter username and password.
3. Click the Login button.
4. Verify the dashboard is displayed.

Sometimes the dashboard loads slowly due to network latency.

The test attempts to locate the dashboard element before it becomes visible.

Result:

* First execution → Pass
* Second execution → Fail
* Third execution → Pass

Although the application is working correctly, the automation test fails intermittently. This is called a **Flaky Test**.

### Common Causes of Flaky Tests

| Cause                 | Description                                               |
| --------------------- | --------------------------------------------------------- |
| Dynamic page loading  | Web elements appear after a delay.                        |
| Poor synchronization  | The script interacts with elements before they are ready. |
| Unstable locators     | XPath or CSS selectors change frequently.                 |
| Shared test data      | Multiple tests modify the same data simultaneously.       |
| Network latency       | Slow internet or server response causes timing issues.    |
| Browser compatibility | Different browsers render pages differently.              |

### Strategies to Prevent or Fix Flaky Tests

| Strategy                       | Explanation                                                                                                                    |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| **1. Use Explicit Waits**      | Wait until an element is visible or clickable before interacting with it. This reduces failures caused by page loading delays. |
| **2. Use Stable Locators**     | Prefer IDs, Names, or reliable CSS selectors instead of fragile XPath expressions that change frequently.                      |
| **3. Isolate Test Data**       | Each test should use independent data so that one test does not affect another.                                                |
| **4. Avoid Hard-Coded Delays** | Replace `Thread.sleep()` with Selenium Explicit Waits (`WebDriverWait`) to improve reliability.                                |
| **5. Keep Tests Independent**  | Each test should run independently without depending on the outcome of previous tests.                                         |
### Best Practices

* Synchronize automation scripts properly.
* Use reliable element locators.
* Maintain clean and independent test data.
* Execute tests in a stable environment.
* Review flaky tests regularly and fix unstable scripts immediately.


# Task 2: Compare Automation Framework Types

## 21. Comparison of Automation Framework Types

### 1. Linear Framework

**Description**

The Linear Framework, also known as the **Record and Playback Framework**, is the simplest automation framework. Test scripts are written in a sequential manner where each test case is independent. There is no code reusability, modularization, or external test data. It is suitable for small projects with simple workflows.

| Feature                   | Description                                                                |
| ------------------------- | -------------------------------------------------------------------------- |
| Advantage                 | Easy to develop and understand. Suitable for beginners.                    |
| Disadvantage              | Difficult to maintain as the project grows. No code reusability.           |
| Course Management Example | Automating only the Course Login functionality for demonstration purposes. |


### 2. Modular Framework

**Description**

The Modular Framework divides the application into independent modules. Each module has its own automation script, and these modules are reused across multiple test cases. This reduces duplicate code and improves maintainability.

| Feature                   | Description                                                                                                                     |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| Advantage                 | High code reusability and easier maintenance.                                                                                   |
| Disadvantage              | Initial design requires more planning compared to the Linear Framework.                                                         |
| Course Management Example | Separate modules for Login, Course Creation, Course Update, and Course Deletion that can be reused in different test scenarios. |

### 3. Data-Driven Framework

**Description**

The Data-Driven Framework separates test data from the automation scripts. Test data is stored in external files such as Excel, CSV, JSON, or databases. The same script executes multiple times using different datasets.

| Feature                   | Description                                                                                                                                   |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| Advantage                 | One test script can validate many different input combinations.                                                                               |
| Disadvantage              | Requires additional utilities to read external data files.                                                                                    |
| Course Management Example | Testing the `POST /api/courses/` endpoint using multiple course names, course codes, departments, and credit values stored in an Excel sheet. |

### 4. Keyword-Driven Framework

**Description**

The Keyword-Driven Framework uses predefined keywords that represent actions such as Click, Type, Login, Verify, or Submit. Test cases are created by arranging these keywords instead of writing programming code.

| Feature                   | Description                                                                                                             |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| Advantage                 | Non-technical team members can create and maintain test cases.                                                          |
| Disadvantage              | Designing and maintaining the keyword library requires additional effort.                                               |
| Course Management Example | Keywords like Login, CreateCourse, SearchCourse, DeleteCourse, and Logout can be reused across multiple test scenarios. |


### 5. Hybrid Framework

**Description**

The Hybrid Framework combines the advantages of multiple frameworks, usually Modular, Data-Driven, and Keyword-Driven. It provides high flexibility, code reusability, maintainability, and scalability. It is the most commonly used framework in real-world automation projects.

| Feature                   | Description                                                                                                                              |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| Advantage                 | Highly reusable, scalable, and suitable for large enterprise applications.                                                               |
| Disadvantage              | Initial framework development requires more time and planning.                                                                           |
| Course Management Example | Automating the Course Management frontend using reusable Page Objects, Excel test data, utility classes, and common login functionality. |


## Framework Comparison Summary

| Framework      | Best For                  | Main Advantage             | Main Disadvantage                 |
| -------------- | ------------------------- | -------------------------- | --------------------------------- |
| Linear         | Small Projects            | Simple to create           | Difficult to maintain             |
| Modular        | Medium Projects           | Reusable modules           | Requires planning                 |
| Data-Driven    | Repeated input testing    | Supports multiple datasets | External data management required |
| Keyword-Driven | Mixed technical teams     | Easy for non-programmers   | Keyword maintenance               |
| Hybrid         | Large Enterprise Projects | Flexible and scalable      | Higher initial development effort |


## 22. Recommended Framework for the Course Management Frontend

### Scenario

The Selenium automation suite must:

* Test login using **50 different username/password combinations**.
* Reuse the login functionality across **20 different test cases**.
* Allow **both technical and non-technical team members** to create or maintain tests.

### Recommended Framework

**Hybrid Framework (Combination of Modular + Data-Driven + Keyword-Driven)**


### Justification

| Requirement                               | Recommended Framework | Reason                                                                                         |
| ----------------------------------------- | --------------------- | ---------------------------------------------------------------------------------------------- |
| Test login with 50 users                  | Data-Driven           | Credentials can be stored in Excel or CSV files and executed using the same automation script. |
| Reuse login steps                         | Modular               | Login functionality is implemented once and reused across all test cases.                      |
| Support technical and non-technical users | Keyword-Driven        | Test cases can be created using predefined keywords without programming knowledge.             |
| Large automation suite                    | Hybrid                | Combines the advantages of all framework types for better maintainability and scalability.     |


## 23. Hybrid Framework Folder Structure

A Hybrid Selenium Framework for the Course Management frontend can be organized as follows:

CourseManagementAutomation/

│
├── config/
│      config.properties
│
├── testdata/
│      login_data.xlsx
│      course_data.xlsx
│
├── pages/
│      LoginPage.java
│      DashboardPage.java
│      CoursePage.java
│
├── tests/
│      LoginTest.java
│      CourseTest.java
│      SmokeTest.java
│
├── utilities/
│      DriverFactory.java
│      ExcelUtils.java
│      ScreenshotUtils.java
│      WaitUtils.java
│
├── reports/
│      ExtentReports/
│
├── screenshots/
│
├── logs/
│
└── pom.xml


### Folder Description

| Folder          | Purpose                                                                                                   |
| --------------- | --------------------------------------------------------------------------------------------------------- |
| **config**      | Stores configuration files such as browser settings, application URL, and execution parameters.           |
| **testdata**    | Stores external test data files such as Excel or CSV.                                                     |
| **pages**       | Contains Page Object Model (POM) classes representing web pages of the application.                       |
| **tests**       | Contains Selenium test scripts that execute various test scenarios.                                       |
| **utilities**   | Contains reusable helper classes such as WebDriver initialization, Excel reading, screenshots, and waits. |
| **reports**     | Stores generated automation execution reports such as Extent Reports.                                     |
| **screenshots** | Stores screenshots captured during test failures.                                                         |
| **logs**        | Stores execution logs for debugging and analysis.                                                         |
| **pom.xml**     | Maven configuration file containing project dependencies and build settings.                              |

