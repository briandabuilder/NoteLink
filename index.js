const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();
app.set("view engine", "ejs");
const PORT_NUMBER = 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/public'));

let notes = [];

app.get("/", function(req, res) {
    res.render("index", {
        notes: notes
    });
});

app.post("/create", function(req, res) {
    res.render("create");
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

app.post("/home", function(req, res) {
    const currNoteTitle = req.body.notetitle;
    for (let i = 0; i < notes.length; i++) {
        if (notes[i].noteTitle === currNoteTitle) {
            notes.splice(i, 1);
        }
    }
    res.redirect("/");
});

app.listen(PORT_NUMBER, function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log("App running successfully on port " + PORT_NUMBER.toString());
    }
})