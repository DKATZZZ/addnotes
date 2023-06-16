const env = {
    database: 'mydb',
    username: 'root',
    password: 'DBPassword123',
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
  };
   
  module.exports = env;