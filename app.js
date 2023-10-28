const express = require("express");
const hbs = require("hbs");
const path = require("path");

const app = express();

// SET VIEW ENGINE AND VIEW FILE PATH 
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "/templates/views"));
hbs.registerPartials(path.join(__dirname, "/templates/partials"));

// REQUEST HANDLE 
app.get("/", (req, res) => {
    res.render("index", {
        title: "Home",
        name: "Khaing Thazin"
    });
});

app.get("/about", (req, res) => {
    res.render("about", {
        title: "About",
        name: "Khaing Thazin"
    });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});