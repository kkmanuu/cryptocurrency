module.exports = {
  transform: {
    '^.+\\.jsx?$': 'babel-jest', // Use Babel for transforming JS/JSX files
  },
  moduleNameMapper: {
    '\\.(css|less)$': 'identity-obj-proxy', // Use a mock for CSS modules
  },
};
