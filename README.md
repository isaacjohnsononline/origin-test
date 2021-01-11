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
