const esModules = ['quasar/lang', 'lodash-es'].join('|')

module.exports = {
  setupFiles: ['<rootDir>/jest.prescript.js'],
  testMatch: [
    '<rootDir>/tests/**/*.(spec|test).+(ts|js)?(x)'
  ],
  preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel",
  moduleFileExtensions: ['vue', 'js', 'jsx', 'json', 'ts', 'tsx'],
  moduleNameMapper: {
    '^quasar$': 'quasar/dist/quasar.common.js',
    '^@/(.*)$': '<rootDir>/src/$1',
    '^app/(.*)$': '<rootDir>/$1',
    '^components/(.*)$': '<rootDir>/src/components/$1',
    '^layouts/(.*)$': '<rootDir>/src/layouts/$1',
    '^pages/(.*)$': '<rootDir>/src/pages/$1',
    '^assets/(.*)$': '<rootDir>/src/assets/$1',
    '^boot/(.*)$': '<rootDir>/src/boot/$1',
    '.*css$': '@quasar/quasar-app-extension-testing-unit-jest/stub.css'
  },
  transform: {
    [`^(${esModules}).+\\.js$`]: 'babel-jest',
    '^.+\\.(ts|js|html)$': 'ts-jest',
    '.*\\.vue$': 'vue-jest',
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub'
  },
  transformIgnorePatterns: [`node_modules/(?!(${esModules}))`],
  snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue']
}