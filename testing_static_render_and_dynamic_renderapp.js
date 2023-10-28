const express = require("express");
const path = require("node:path");

const app = express();

// RENDERING DYNAMIC PAGE (TEMPLATE)
// SET THE VIEW ENGINE AS HBS
app.set("view engine", "hbs");
// OPTIONALLY BUT SET TO AVOID ERRORS
app.set("views", path.join(__dirname, "/testing_views"));

app.get("/", (req, res) => {
    res.render("index", {
        author: "Khaing Thazin"
    });
});

// RENDERING STATIC PAGE
// app.use(express.static(path.join(__dirname, "/public"))); 

app.listen(3000, () => {
    console.log("Server is running on port 3000...");
});