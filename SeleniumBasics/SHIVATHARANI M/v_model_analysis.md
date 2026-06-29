# SDLC vs TDLC – V-Model & Agile QA Integration

# Task 1: V-Model Mapping

## 9. V-Model


Requirements Analysis ------------------> Acceptance Testing

        │
        │
System Design --------------------------> System Testing

        │
        │
Architecture Design --------------------> Integration Testing

        │
        │
Module Design --------------------------> Unit Testing

                │
                ▼
              Coding


## 10. SDLC and TDLC Mapping

| SDLC Phase            | Corresponding TDLC Phase | Test Artifact Produced |
| --------------------- | ------------------------ | ---------------------- |
| Requirements Analysis | Acceptance Testing       | Acceptance Test Plan   |
| System Design         | System Testing           | System Test Cases      |
| Architecture Design   | Integration Testing      | Integration Test Cases |
| Module Design         | Unit Testing             | Unit Test Cases        |
## 11. Entry and Exit Criteria

### Unit Testing

| Entry Criteria                | Exit Criteria                              |
| ----------------------------- | ------------------------------------------ |
| Module development completed. | All unit test cases executed successfully. |
| Source code available.        | No critical defects remain.                |
### Integration Testing

| Entry Criteria                   | Exit Criteria                           |
| -------------------------------- | --------------------------------------- |
| Unit testing completed.          | Communication between modules verified. |
| Modules integrated successfully. | Major integration defects fixed.        |

### System Testing

| Entry Criteria                           | Exit Criteria                                |
| ---------------------------------------- | -------------------------------------------- |
| Complete Course Management API deployed. | All planned system test cases executed.      |
| Integration testing completed.           | No Critical or High severity defects remain. |

### Acceptance Testing

| Entry Criteria                         | Exit Criteria                      |
| -------------------------------------- | ---------------------------------- |
| System testing completed successfully. | Customer approves the application. |
| Business users available.              | Acceptance criteria satisfied.     |


## 12. QA Involvement During Development

| Development Phase   | QA Activity                                                                 |
| ------------------- | --------------------------------------------------------------------------- |
| Requirements Review | Review business requirements, remove ambiguity, define acceptance criteria. |
| Design Review       | Review API design, database schema, validation rules and testability.       |


# Task 2: Agile QA and Shift-Left Testing

## 13. Problems with Waterfall Testing

| Problem                | Explanation                                                                                             |
| ---------------------- | ------------------------------------------------------------------------------------------------------- |
| Late Defect Detection  | Bugs are found only after development is completed.                                                     |
| High Cost of Fixing    | Fixing defects becomes more expensive because completed modules may need modification.                  |
| Late Customer Feedback | Business users review the system only after development, increasing the risk of requirement mismatches. |

## 14. QA Activities in Agile

| Agile Ceremony       | QA Responsibilities                                                          |
| -------------------- | ---------------------------------------------------------------------------- |
| Sprint Planning      | Review user stories, define acceptance criteria and estimate testing effort. |
| Daily Stand-up       | Report testing progress, discuss blockers and coordinate with developers.    |
| Sprint Review        | Validate completed features and demonstrate tested functionality.            |
| Sprint Retrospective | Suggest improvements to enhance quality and testing efficiency.              |

## 15. Shift-Left Testing Practices

| Practice                            | Application to the Course Management API                                  |
| ----------------------------------- | ------------------------------------------------------------------------- |
| Review Requirements Early           | QA reviews API requirements and validation rules before coding begins.    |
| Write Test Cases Before Development | Test cases for CRUD APIs are prepared before implementation.              |
| Static Code Analysis                | Developers use static analysis tools to identify coding issues early.     |
| API Contract Testing                | API specifications are validated before frontend and backend integration. |


## 16. Acceptance Criteria (Given-When-Then)

### Scenario 1: Successful Course Creation


Scenario: Successfully create a new course

Given I am logged in as a College Admin
When I enter valid course details
And I click the Create Course button
Then the course should be created successfully
And a success message should be displayed

### Scenario 2: Duplicate Course Code

Scenario: Duplicate course code

Given a course already exists with course code "CS101"
When I attempt to create another course with the same course code
Then the system should display an error message
And the course should not be created

### Scenario 3: Missing Required Fields


Scenario: Missing mandatory fields

Given I am on the Create Course page
When I leave the Course Name field empty
And I click the Create Course button
Then validation should prevent submission
And an appropriate error message should be displayed
