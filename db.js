var mysql = require('mysql');
var express = require('express');
var app = express();
const bodyParser = require("body-parser");
const encoder = bodyParser.urlencoded();
var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'project'
});

con.connect(function(error) {
    if (error) throw error;
    else console.log("connected to the database successfully!");
});

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/login.html");
});

app.post("/", encoder, function(req, res) {
    var username = req.body.username;
    var password = req.body.password;
    con.query("SELECT * FROM user WHERE name = ? AND password = ?", [username, password], function(error, results, fields) {
        if (error) throw error;
        
        if (results.length > 0) {
            res.redirect("/welcome");
        } else {
            res.redirect("/");
        }
    });
});

// when login is successful
app.get("/welcome", function(req, res) {
    res.sendFile(__dirname + "/welcome.html");
});

// set app port 
app.listen(8087, function() {
    console.log('App listening on port 1100');
});