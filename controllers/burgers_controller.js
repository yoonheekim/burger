
// Express
var express = require("Express");
var router = express.Router();

// burger.js
var buger = require("../models/burger.js");

// Create the router for the app, and export the router at the end of your file.
router.get("/~~", function(req, res){
    res.json(buger.selectAll);
});

router.post("/~~", function(req,res){
    buger.
});

router.