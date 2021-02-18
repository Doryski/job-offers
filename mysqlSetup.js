// @ts-ignore
const mysql = require('mysql2');

const db = mysql.createConnection({
    host: "localhost",
    port: 3307,
    database: "job_offers",
    user: "root",
    password: "Domin4Database"
});

db.connect(function (err) {
    if (err) { return (console.log(err)) };
    console.log("Connected!");
});

module.exports.db = db