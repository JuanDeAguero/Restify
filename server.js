const express = require("express");
const fs = require("fs");
const http = require("http");
const https = require("https");

const app = express();
const redirectApp = express();

app.use(express.static("build"));

app.use((req, res, next) => {
    console.log('HTTPS:', req.method, req.url, req.headers);
    next();
});

redirectApp.use((req, res, next) => {
    console.log('HTTP:', req.method, req.url, req.headers);
    next();
});

redirectApp.get("*", (req, res) => {
    res.redirect("https://restify.ca");
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Error 500 HTTPS");
});

redirectApp.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Error 500 HTTP");
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