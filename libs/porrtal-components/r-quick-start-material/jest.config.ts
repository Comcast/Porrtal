/* eslint-disable */
export default {
  displayName: 'porrtal-components-r-quick-start-material',
  preset: '../../../jest.preset.js',
  transform: {
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nrwl/react/plugins/jest',
    '^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@nrwl/react/babel'] }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory:
    '../../../coverage/libs/porrtal-components/r-quick-start-material',
};
