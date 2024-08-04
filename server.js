const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const morgan = require("morgan");

const app = express();
const PORT=8000;

// locahost:8080/  (bacward / for online server)
// C:\  (\ for offline)
// domain  (together (\,/) routing)

app.get("/", (req, res) => {
    res.send("<h1>Hello World</h1>");
    console.log("llaallaala");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`.bgBlue.black);
});