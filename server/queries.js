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
function getUsers(){
    connection.query('SELECT * FROM user', (err,rows) => {
        if(err) throw err;
      
        console.log('Data received from Db:');
        console.log(rows);
      });
}
function addFormEmail(req){
    let data = {name: req.body.name};
    let sql = `INSERT INTO user (user_id , username, register_date, salt, password_hash,email) VALUES (user_id, null, null, null, null, ${req.body.name}) `;
    let query = connection.query(sql, data, (err, result) => {
        if(err) throw err;
        res.send

    });


}





//closing connection
connection.end((err) => {
    //closes the connection gracefully
});

