module.exports = {
  preset: 'jest-preset-angular',
  verbose: true,
  setupFilesAfterEnv: ['<rootDir>/../../jest.base.setup.ts'],
  "testMatch": [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)"
  ],
  "transform": {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  collectCoverage: true,
  coverageReporters: ['lcov']
};
