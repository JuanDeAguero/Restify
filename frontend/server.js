const express = require("express");
const https = require("https");
const fs = require("fs");

const app = express();
app.use(express.static("build"));

const options = {
    key: fs.readFileSync("privkey.pem"),
    cert: fs.readFileSync("fullchain.pem")
};

https.createServer(options, app).listen(443, () => {
    console.log("HTTPS server running on port 443");
});