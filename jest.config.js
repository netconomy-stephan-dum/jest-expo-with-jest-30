const { dirname } = require('node:path');

const config = {
    preset: dirname(require.resolve('jest-expo/package.json')),
};

module.exports = config;
