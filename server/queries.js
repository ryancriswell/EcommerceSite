const mysql = require('mysql');


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'node',
  password: 'ReallyCoolSecurePassword!123',
  database: 'ecommerce_db'
});
//show that our connection succeeded
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});

//execute some queries
connection.query('SELECT * FROM user', (err,rows) => {
    if(err) throw err;
  
    console.log('Data received from Db:');
    console.log(rows);
  });




//closing connection
connection.end((err) => {
    //closes the connection gracefully
});

