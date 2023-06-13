const express = require("express");
const http = require("http");
const https = require("https");
const fs = require("fs");

const app = express();
const redirectApp = express();

app.use(express.static("build"));

redirectApp.get("*", (req, res) => {
    res.redirect("https://restify.ca");
});

const options = {
    key: fs.readFileSync("privkey.pem"),
    cert: fs.readFileSync("fullchain.pem")
};

https.createServer(options, app).listen(443, () => {
    console.log("HTTPS server running on port 443");
});

http.createServer(redirectApp).listen(80, () => {
    console.log("HTTP server running on port 80");
});