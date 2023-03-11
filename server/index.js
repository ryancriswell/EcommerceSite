const express = require("express");
import queries from './queries'


//Internal abstractions for interfacting with the DB
const queries = require("./queries");

const PORT = process.env.PORT || 3001;

//// Create an app
const app = express();
// Include JSON parsing capabilities, our API will be JSON based.
app.use(express.json());


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
// Create/Modify account
app.post("/account", (req, res) => {
    
});
// Submit order
app.post("/checkout", (req, res) => {

});


//// Begin listening on our API port...
app.listen(PORT, () => console.log(`Now listening on ${PORT}...`));
