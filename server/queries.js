const mysql = require('mysql');


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'node',
  password: 'ReallyCoolSecurePassword!123',
  database: 'ecommerce_db'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});


