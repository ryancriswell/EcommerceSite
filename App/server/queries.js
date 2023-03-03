const mysql = require("promise-mysql");

function parseSqlJson(result) {
    
}

function getItems(con) {
    
}
async function executeGetJson(con, query) {
    return con.query(query)
        .then(parseSqlJson);
}