module.exports = {
    setupFilesAfterEnv: [
        '<rootDir>/src/setupTests.ts',
    ],
    // needed to access the @testing-library/jest-dom methods like expect(container).toBeInTheDocument();
    testEnvironment: 'jest-environment-jsdom-fourteen',
};
