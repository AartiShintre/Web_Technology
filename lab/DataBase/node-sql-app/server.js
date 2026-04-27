const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "manager",
    database: "studentdb"
});

db.connect((err) => {
    if (err) {
        console.log("Database connection failed:", err);
    } else {
        console.log("Connected to MySQL");
    }
});
app.get("/", (req, res) => {
    res.send("Server is working");
});

// ✅ Start server (always at bottom)
app.listen(3000, () => {
    console.log("Server running on port 3000");
});