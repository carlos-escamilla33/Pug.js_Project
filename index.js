// index.js

/**
 * Required External Modules
 */

const express = require("express");
const path = require("path")

/**
 * App Variables
 */

const app = express();
const port = process.env.PORT || "8000";

/**
 *  App Configuration
 */

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")))

/**
 * Routes Definitions
 */

app.get("/", (req, res) => {
    res.render("index", { title: "Home" });
})

app.get("/micayla", (req, res) => {
    res.render("wife", { title: "Wifey", userProfile: "I couldnt be happier" })
})

app.get("/basketball", (req, res) => {
    res.render("basketball", { title: "Basketball"})
})

app.get("/lambo", (req, res) => {
    res.render("car", { title: "Hypebeast Shoes"})
})

/**
 * Server Activation
 */

app.listen(port, () => {
    console.log(`Listening to requests on http://localhost${port}`)
})