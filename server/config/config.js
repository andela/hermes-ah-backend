import dotenv from 'dotenv';

dotenv.config();

const {
  DB_USERNAME,
  DB_PASSWORD,
  DEV_DATABASE,
  DB_HOST,
  DB_PORT,
  TEST_DATABASE,
  PROD_DATABASE
} = process.env;

module.exports = {
  development: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DEV_DATABASE,
    host: DB_HOST,
    port: DB_PORT,
    dialect: 'postgres',
  },
  test: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: TEST_DATABASE,
    host: DB_HOST,
    port: DB_PORT,
    dialect: 'postgres',
  },
  production: {
    use_env_variable: PROD_DATABASE,
  },
};
