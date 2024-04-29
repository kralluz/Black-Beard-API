// jest.config.js
module.exports = {
    clearMocks: true,
    coverageProvider: 'v8',
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
    },
    // setupFiles: ['dotenv/config'],
    testMatch: ['**/*.e2e-spec.[jt]s?(x)'],
    // setupFilesAfterEnv: ['./jest.setup.js'],
};
