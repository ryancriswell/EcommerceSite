const express = require("express");

//Internal abstractions for interfacting with the DB
const queries = require("./queries");

const PORT = /* env.PORT ?? */ 3001;

//// Create an app
const app = express();
// Include JSON parsing capabilities, our API will be JSON based.
app.use(express.json());



//// Register routes
// Get list of items in shop
app.get("/shopitems", (req, res) => {
    let json = queries.getItems(null);
    console.log(json);
    res.json(json);
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
