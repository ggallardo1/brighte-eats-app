module.exports = {
  preset: 'ts-jest', // Use ts-jest preset
  testEnvironment: 'node', // Set the environment to Node.js
  moduleFileExtensions: ['ts', 'js', 'json', 'node'], // Recognize .ts and .js files
  testMatch: ['**/tests/**/*.test.ts'], // Specify test file pattern
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
};