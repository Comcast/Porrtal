/* eslint-disable */
export default {
  displayName: 'porrtal-components-r-quick-start-demo',
  preset: '../../../jest.preset.js',
  transform: {
    '^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@nrwl/react/babel'] }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory:
    '../../../coverage/libs/porrtal-components/r-quick-start-demo',
};
