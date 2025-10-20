'use strict'

const path = require('path');

module.exports = {
  testMatch: [
    '<rootDir>/packages/**/tests/**/*.(test|spec).?(c|m)js',
    '<rootDir>/packages/**/tests/**/*.(test|spec).?(c|m)ts'
  ],
  testEnvironment: 'jsdom',
  extensionsToTreatAsEsm: [],
  testPathIgnorePatterns: [
    '/node_modules/',
    '<rootDir>/packages/config/jest'
  ],
  moduleDirectories: [
    'node_modules',
    '<rootDir>'
  ],
  resetMocks: true,
  restoreMocks: true,
  clearMocks: true,

  reporters: ['default']
}