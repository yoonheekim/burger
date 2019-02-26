//setup the code to connect Node to MySQL


var mysql = require("mysql");

var connection = mysql.createConnection({
    host : "localhost",
    port : 3306,
    user: "root", 
    password : "001059jyh",
    database : "burgers_db"
});

connection.connect(function(err){
    if(err) {
        console.log("error connecting : "+err.stack);
    }
    console.log("connected as id : "+connection.threadId);
});

module.exports = connection;
