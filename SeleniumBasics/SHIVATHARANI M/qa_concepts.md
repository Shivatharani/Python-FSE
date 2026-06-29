# QA Concepts & Selenium Basics

# Hands-On 1


# Task 1: QA Concepts, Functional Testing & Defect Lifecycle

## 1. Testing Levels Applied to the Course Management API

### Unit Testing

**Definition:**

* Unit Testing verifies a single function or method independently without interacting with other components.

**Test Case:**

| Item            | Description                                                                                   |
| --------------- | --------------------------------------------------------------------------------------------- |
| Function        | `create_course()`                                                                             |
| Objective       | Verify that the function creates a course object successfully.                                |
| Input           | Course Name: Python Programming, Course Code: CS101, Credits: 4, Department: Computer Science |
| Expected Result | A course object is created successfully.                                                      |
| Testing Type    | Functional Testing                                                                            |


### Integration Testing

**Definition:**

* Integration Testing verifies whether multiple modules work correctly together.

**Test Case:**

| Item            | Description                                                                 |
| --------------- | --------------------------------------------------------------------------- |
| API Endpoint    | `POST /api/courses/`                                                        |
| Database        | MySQL                                                                       |
| Objective       | Verify that the API stores the course details successfully in the database. |
| Expected Result | HTTP 201 Created and the course record is saved in the database.            |
| Testing Type    | Functional Testing                                                          |


### System Testing

**Definition:**

* System Testing verifies the complete application workflow.

**Test Case:**

| Item            | Description                                |
| --------------- | ------------------------------------------ |
| Workflow        | Create → Retrieve → Update → Delete Course |
| Objective       | Verify complete CRUD functionality.        |
| Expected Result | All operations complete successfully.      |
| Testing Type    | Functional Testing                         |


### User Acceptance Testing (UAT)

**Definition:**

* UAT verifies that the application satisfies business requirements from the user's perspective.

**Test Case:**

| Item            | Description                                                         |
| --------------- | ------------------------------------------------------------------- |
| User            | College Admin                                                       |
| Objective       | Create a new course for students.                                   |
| Steps           | Create a course using Swagger (`/docs`) and verify it is available. |
| Expected Result | Course is successfully created and available for enrollment.        |
| Testing Type    | Functional Testing                                                  |


## 2. Functional vs Non-Functional Testing

| Functional Testing                                | Non-Functional Testing                                           |
| ------------------------------------------------- | ---------------------------------------------------------------- |
| Verifies whether the application works correctly. | Verifies how well the application performs.                      |
| Focuses on business requirements.                 | Focuses on performance, security and reliability.                |
| Example: Create Course API works correctly.       | Example: API responds within 2 seconds for 100 concurrent users. |

### Non-Functional Test Example

| Test Type           | Description                                                                                                      |
| ------------------- | ---------------------------------------------------------------------------------------------------------------- |
| Performance Testing | Verify that the Course Management API responds within 2 seconds for 100 concurrent users without server failure. |


## 3. Black-Box Testing vs White-Box Testing

| Black-Box Testing                 | White-Box Testing                     |
| --------------------------------- | ------------------------------------- |
| Internal code is not visible.     | Internal code is visible.             |
| Tests functionality.              | Tests internal logic and code.        |
| Focuses on inputs and outputs.    | Focuses on code paths and conditions. |
| Performed mainly by QA Engineers. | Performed mainly by Developers.       |

**Conclusion**

* QA Engineers generally perform **Black-Box Testing**.
* Developers generally perform **White-Box Testing**.


## 4. Formal Test Cases for `POST /api/courses/`

| Test Case ID | Description                                  | Preconditions              | Test Steps                                   | Expected Result                              | Actual Result | Pass / Fail |
| ------------ | -------------------------------------------- | -------------------------- | -------------------------------------------- | -------------------------------------------- | ------------- | ----------- |
| TC001        | Create a course with valid details           | API is running             | Send POST request with valid course details  | HTTP 201 Created and course saved            |               |             |
| TC002        | Create a duplicate course                    | Course code already exists | Send POST request with duplicate course code | HTTP 409 Conflict                            |               |             |
| TC003        | Create a course with missing mandatory field | API is running             | Send POST request without Course Name        | HTTP 400 Bad Request with validation message |               |             |


# Task 2: Defect Lifecycle & Severity Classification

## 5. Defect Lifecycle


New
 ↓
Assigned
 ↓
Open
 ↓
Fixed
 ↓
Retest
 ↓
Verified
 ↓
Closed

### Additional States

| State    | Description                                                                      |
| -------- | -------------------------------------------------------------------------------- |
| Rejected | The reported issue is not considered a valid defect.                             |
| Deferred | The defect is valid but postponed to a future release due to project priorities. |


## 6. Severity and Priority Classification

| Bug                                                               | Severity | Priority | Justification                                        |
| ----------------------------------------------------------------- | -------- | -------- | ---------------------------------------------------- |
| POST `/api/courses/` returns HTTP 500 for all requests            | Critical | P1       | Core functionality is completely unavailable.        |
| Course names longer than 150 characters are silently truncated    | Medium   | P2       | Data loss occurs but the application still works.    |
| Swagger documentation contains a spelling mistake                 | Low      | P4       | Cosmetic issue only.                                 |
| Login occasionally returns HTTP 401 even with correct credentials | High     | P1       | Authentication becomes unreliable and affects users. |

## 7. Defect Report

| Field              | Details                                                                                                 |
| ------------------ | ------------------------------------------------------------------------------------------------------- |
| Defect ID          | BUG-001                                                                                                 |
| Title              | POST `/api/courses/` returns HTTP 500 Internal Server Error                                             |
| Environment        | Windows 11, Chrome, FastAPI, MySQL                                                                      |
| Build Version      | Version 1.0                                                                                             |
| Severity           | Critical                                                                                                |
| Priority           | P1                                                                                                      |
| Steps to Reproduce | 1. Open Swagger (`/docs`) 2. Select POST `/api/courses/` 3. Enter valid course details 4. Click Execute |
| Expected Result    | Course should be created successfully.                                                                  |
| Actual Result      | HTTP 500 Internal Server Error is returned.                                                             |
| Attachment         | Screenshot of HTTP 500 Error                                                                            |
## 8. Difference Between Severity and Priority

| Severity                                            | Priority                                          |
| --------------------------------------------------- | ------------------------------------------------- |
| Measures the impact of a defect on the application. | Measures how urgently the defect should be fixed. |

### Example

A crash occurs only when opening the **About Us** page.

* **Severity:** High (Application crashes)
* **Priority:** Low (Users rarely access the page)

This shows that **High Severity does not always mean High Priority**.
