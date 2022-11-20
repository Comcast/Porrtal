/* eslint-disable */
export default {
  displayName: 'porrtal-components-r-test',
  preset: '../../../jest.preset.js',
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../../coverage/libs/porrtal-components/r-test',
};
