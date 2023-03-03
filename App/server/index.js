const express = require("express");
const mysql = require("mysql");

var con = mysql.createConnection({
    host: "mysql://localhost:3306",
    user: "admin",
    // No one will ever guess this password stored in a public GitHub!!
    password: "ReallyCoolSecurePassword!123"
});
con.connect((err) => {
    // Fatally terminate server if the connection fails.
    if (err) throw err;
    console.log("MySQL Connection Established");
});


const PORT = env.PORT ?? 3001;

//// Create an app
const app = express();
// Include JSON parsing capabilities, our API will be JSON based.
app.use(express.json());



//// Register routes
// Get list of items in shop
app.get("/shopitems", (req, res) => {

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
// Create/Modify account
app.post("/account", (req, res) => {

});
// Submit order
app.post("/checkout", (req, res) => {

});


//// Begin listening on our API port...
app.listen(PORT, () => console.log(`Now listening on ${PORT}...`));
