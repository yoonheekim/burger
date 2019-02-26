// Import (require) connection.js into orm.js
var connection = require("./connection.js");

// In the orm.js file, create the methods that will execute the necessary MySQL commands in the controllers. 
//These are the methods you will need to use in order to retrieve and store data in your database.
// selectAll()
// insertOne()
// updateOne()
var orm = {
    selectAll: function(table, cb){
        var queryString = "SELECT * FROM ";
        queryString += table;
        connection.query(queryString, function(err, result){
            if(err){
                console.log(err)
            }
            cb(result);
        });
    },
    insertOne: function(table, tableCol, value, cb){
        var queryString = "INSERT INTO ";
        queryString += table;
        queryString += " ("+tableCol+") ";
        queryString += "VALUES ";
        queryString += "( '" +value+"')";

        connection.query(queryString, function(err, result){
            if(err){
                console.log(err)
            }
            cb(result);
        })

    },
    updateOne: function(table, condition, cb){
        var queryString = "UPDATE ";
        queryString += table ;
        queryString += " SET ";
        queryString += values;
        queryString += condition;

        connection.query(queryString, function(err, result){
            if(err){
                console.log(err)
            }
            cb(result);
        })

    }
}


// Export the ORM object in module.exports.
module.exports = orm;