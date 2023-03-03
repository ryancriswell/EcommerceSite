const express = require("express");

//Community mysql is callback based, this provides
//a promise-based API which is easier on my monkey brain
const mysql = require("promise-mysql");

//Throw if connection failed, unwrap the connection if successful.
var con = await mysql.createConnection({
    host: "mysql://localhost:3306",
    user: "admin",
    // No one will ever guess this password stored in a public GitHub!!
    password: "ReallyCoolSecurePassword!123"
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
