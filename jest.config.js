module.exports = {
  //при каждом запуске должен очищать моки которые были созданы типа заглушки и тд
  clearMocks: true,
  //откуда брать инфо для отчета по покрытию теста
  collectCoverageFrom: ['src/**/*.js'],
  //где будет храниться отчет
  coverageDirectory: 'coverage',
  //какие файлы тестируем
  moduleFileExtensions: ['js'],
  testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],
  //где тест не надо искать
  testPathIgnorePatterns: ['\\\\node_modules\\\\'],
  //как работать с разными файлами
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  transform: {
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub',
    '^.+\\.(js|jsx)?$': 'babel-jest'
  },
  // verbose: false,
};