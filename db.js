const mysql = require('mysql');

// Create MySQL connection pool
exports.db = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: 'admin123',
  database: 'quantum'
});