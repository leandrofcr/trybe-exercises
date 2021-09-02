const mysql =  require('mysql2/promise');

const connection =  mysql.createPool({
  user: 'leandro',
  password: 'fladnaG*',
  host: 'localhost',
  database: 'model_example'
});

module.exports = connection;
