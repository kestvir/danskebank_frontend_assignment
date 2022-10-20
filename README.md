# Danskebank-frontend-assignment

## Notes

Some of the exports which should have been absolute exports with a prefix are relative due to an issue caused by `renderWithProviders` utility. The issue couldn't be solved within the allocated time.

Avoided testing `redux` and `react-router` related functionality even though I can see the value in that and maybe this was desired. Would be curious to learn about the best testing practises when dealing with the mentioned technologies.

Was not able to test `PeopleTable` within the allocated time as I encountered an issue simmilar to this one: https://github.com/reduxjs/redux-toolkit/issues/2478

## Installation

    npm install

## Usage

    npm start

## Tests

    npm test
