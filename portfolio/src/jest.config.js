module.exports = {
    moduleFileExtensions: ['js', 'jsx'],
    moduleNameMapper: {
      '\\.(css|less|scss)$': 'identity-obj-proxy', // This is for mocking CSS imports
    },
    transform: {
      '^.+\\.(js|jsx)$': 'babel-jest', // Use babel-jest for JavaScript and JSX files
    },
    testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'], // Pattern for test files
    verbose: true, // Show detailed output
  };