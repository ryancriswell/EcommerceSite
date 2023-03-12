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

});
//need to add the email and feedback!
app.post("/email", (req, res) => {

    // let data = {name: req.body.name};
    let sql = `select * from user `;
    console.log(req.body.message);
    //console.log(res);
    connection.query(sql, (err, result) => {
        if(err) throw err;
        
        console.log(result);

    });

});
// Create/Modify account
app.post("/account", (req, res) => {
    
});
// Submit order
app.post("/checkout", (req, res) => {

});


//// Begin listening on our API port...
app.listen(PORT, () => console.log(`Now listening on ${PORT}...`));
