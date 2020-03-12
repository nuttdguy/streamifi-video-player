const {defaults} = require('jest-config');

module.exports = {
    verbose: true,
    clearMocks: true,
    collectCoverage: true,
    moduleDirectories: ["node_modules"],
    coverageDirectory: "coverage",
    moduleFileExtensions: ["js","json", "jsx"],
    setupFilesAfterEnv: ["jest-enzyme"],
    testEnvironment: "enzyme",
    testEnvironmentOptions: {
        "enzymeAdapter": "react16",
      },
    testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],
    transform: {
        "^.+\\.js$": "babel-jest",
        "^.+\\.jsx$": "babel-jest",
      },
  };