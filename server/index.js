const express = require("express");
const mysql = require('mysql');
const bodyParser = require('body-parser');

//port node will listen on
const PORT = process.env.PORT || 3001;



//// Create an app
const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

//connect to the sql server
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


//// Register routes

// Get list of items in shop
app.get("/shopitems", (req, res) => {
    res.json({ message: "Hello from server!" });
});
// Get the user's cart
app.get("/cart", (req, res) => {

});
// Modify the user's cart
app.post("/cart", (req, res) => {

});
// Login/out
app.post("/login", (req, res) => {
    email = req.body;


    let sql = "select user_id from administrator; select email, user_id from user;";


    if(email != null || email != ""){

      connection.query(sql, (err, result) => {
        if(err) throw(err);
        console.log(result);

      });
    }

});
//updates the table users with a null user other then the email!
app.post("/email", (req, res) => {

    //these are the data fields from the req
    let email = JSON.stringify(req.body.email);
    let feedback = JSON.stringify(req.body.feedback);

    if(email == null || email == "") 
    {console.log("No iinput email")}
    else {

    let sql = `INSERT INTO user (user_id , username, register_date, salt, password_hash,email) VALUES (user_id, null, null, null, null, ${email})`;
    connection.query(sql, (err, result) => {
        if(err) throw(err);
        console.log(result);
    });

  }
});
// Create/Modify account
app.post("/account", (req, res) => {
    
});
// Submit order
app.post("/checkout", (req, res) => {
    //handle order information: {Brazil Bean: 1, Aztec Bean: 1, Mocha Bag: 1}
    console.log(req.body);

    let orderInfo = req.body;



    if(orderInfo != null || orderInfo != "" ){
      let sql = null;
      connection.query(sql, (err, result) => {
        if(err) throw(err);
        console.log(result);

      });


    }
});


//// Begin listening on our API port...
app.listen(PORT, () => console.log(`Now listening on ${PORT}...`));
