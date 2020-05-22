/* 3. Your htmlRoutes.js file should include two routes: (delete message when done)

A GET Route to /survey which should display the survey page.
A default, catch-all route that leads to home.html which displays the home page. */

// path package for file path for html
var path = require("path");

// Routing
modules.exports = function(app) {
    // GET Route Requested HTML content
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
}