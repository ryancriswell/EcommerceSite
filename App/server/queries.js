const mysql = require("promise-mysql");

//Throw if connection failed, unwrap the connection if successful.
var con = await mysql.createConnection({
    host: "mysql://localhost:3306",
    user: "admin",
    // No one will ever guess this password stored in a public GitHub!!
    password: "ReallyCoolSecurePassword!123"
});

function parseSqlJson(result) {

}

export default function getItems(con) {
    
}
async function executeGetJson(con, query) {
    return con.query(query)
        .then(parseSqlJson);
}