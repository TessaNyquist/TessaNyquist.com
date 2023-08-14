// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

module.exports = {
    transform: {
      '^.+\\.jsx?$': 'babel-jest', // Add this line to transform JSX and JS files using Babel
    },
  };
//setupFilesAfterEnv: ['<rootDir>/jest-setup.js']