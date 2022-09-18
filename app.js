const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT_NUMBER = 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/public'));

let notes = [];

app.get("/", function(req, res) {
    res.render("/", {
        notes: notes
    });
});

app.post("/create", function(req, res) {
    res.sendFile(__dirname + "/public/create.html");
});

app.post("/compose", function(req, res) {
    const newNote = {
        noteTitle: req.body.noteTitle,
        noteDescription: req.body.noteDescription,
        noteEmails: req.body.noteEmails,
        notePeople: req.body.notePeople,
        noteLocation: req.body.noteLocation,
        noteWebsite: req.body.noteWebsite
    };

    notes.push(newNote);
    res.redirect("/");
});

app.listen(PORT_NUMBER, function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log("App running successfully on port " + PORT_NUMBER.toString());
    }
})