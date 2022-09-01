const express = require("express");
const app = express();
const PORT_NUMBER = 3000;

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.listen(PORT_NUMBER, function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log("App running successfully on port " + PORT_NUMBER.toString());
    }
})