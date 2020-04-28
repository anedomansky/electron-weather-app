module.exports = {
    setupFilesAfterEnv: [
        '<rootDir>/src/setupTests.ts',
    ],
    // needed to access the @testing-library/jest-dom methods like expect(container).toBeInTheDocument();
    testEnvironment: 'jest-environment-jsdom-fourteen',
    moduleNameMapper: {
        '^.+\\.(css|less|scss)$': 'identity-obj-proxy', // needed so jest can understand import './App.scss'-like webpack imports
        '^.+\\.svg$': 'jest-svg-transformer',
    },
};
