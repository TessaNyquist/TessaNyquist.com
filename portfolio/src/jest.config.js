// jest.config.js
module.exports = {
  // ... other Jest configuration options
  transform: {
    '^.+\\.jsx?$': 'babel-jest'
  },
  testEnvironment: 'jsdom'
};




/*"jest": {
    "preset": "react-native",
    "setupFiles": [
      "./node_modules/react-native-gesture-handler/jestSetup.js"
    ],
    "moduleFileExtensions": [
      "ts",
      "tsx",
      "js",
      "jsx",
      "json",
      "node"
    ],
    "transformIgnorePatterns": [
      "node_modules/(?!react-native|react-navigation)/"
    ]
  }
  */