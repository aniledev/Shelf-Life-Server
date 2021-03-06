module.exports = {
    PORT: process.env.PORT || 8000,
    NODE_ENV: process.env.NODE_ENV || 'development',
    DATABASE_URL: process.env.DATABASE_URL || 'postgresql://adam@localhost/shelf-life',
    TEST_DATABASE_URL: process.env.TEST_DATABASE_URL || 'adam://postgres@localhost/shelf-life-test',
    JWT_SECRET : process.env.JWT_SECRET || 'change-this-secret'
  }