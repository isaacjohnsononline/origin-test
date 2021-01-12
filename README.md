# Origin Energy coding assignment Isaac Johnson <isaacjohnsononline@gmail.com>

## Install and run app

- `yarn`
- `yarn start`

## Test the app

This will also generate a instanbul coverage report in the terminal as well as a coverage report in the ./nyc_output directory

- `yarn test`

### Demonstrate how the unit test could be automated as part of a CI/CD pipeline

- `yarn test:ci`
- This package script could be ran as a git hook on the CI/CD build pipeline
- This will output a mocha-junit-reporter xml file

### AWS LAMBDA and API GATEWAY URL

- https://b6al1lpjff.execute-api.us-east-2.amazonaws.com/users

## Assignment Overview

Task 1 is the only mandatory task. Tasks 2 and 3 can be completed to demonstrate skills in those areas
if you have them. The output of the assignment tasks should be uploaded to a personal github repo and
the link to the repo provided by email for assessment.

### Task 1 - Develop a React application using typescript (Mandatory)
Create a unique application using industry best practice in the React framework using typescript.
- The application should simply present a table of data from a simple data source
- The application should save the state of the table using Redux
- The application should allow the user a cell within the table
- The application should persist the changed state to Redux

### Task 2 – Write an automated unit test for the code in Task 1 (Optional)
- Use mocha and chai to create a BDD/TDD approach to unit testing Task 1
- The unit test should demonstrate code coverage of Task 1
- Demonstrate how the unit test could be automated as part of a CI/CD pipeline.

### Task 3 - Extend Task 1 to call a REST API (Optional)
- Extend Task1 with a React button to call a REST API
- Implement the API using AWS API gateway and a Lambda function
- Provide Cloud Formation or Terraform template for deployment of API
- The Lambda function should return the region of AWS it is deployed in and the runtime version
used for the lambda
- The React application should display the results of the API call.

## Assignment Assessment
The assessment will be conducted on the contents of the repo you provide. The assessment will guide
Origin in the selection process. We encourage you to present only your own work as a follow up
interview may ask you about your assignment task.
Task 1 should take no longer than 1 hour to complete.
Task 2 should take no longer than 1 hour to complete.
Task 3 should take no longer than 2 hours to complete.
Please submit assignments to your recruitment agency or service provider company via email.
