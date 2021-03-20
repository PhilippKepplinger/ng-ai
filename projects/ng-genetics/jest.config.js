const baseConfig = require('../../jest.base.config');

module.exports = {
  ...baseConfig,
  coverageDirectory: '../../coverage/ng-genetics/',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
      stringifyContentPathRegex: '\\.(html|svg)$',
      astTransformers:{
        before: [
          'jest-preset-angular/build/InlineFilesTransformer',
          'jest-preset-angular/build/StripStylesTransformer',
        ]
      }
    }
  }
};
