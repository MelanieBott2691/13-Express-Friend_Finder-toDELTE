/* 4. Your apiRoutes.js file should contain two routes:

A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic. */

var tableData = require();
var waitListData = require("../data/waitinglistData");

// ========================================================== 
// ROUTING
// ==========================================================

module.exports = function(app) {
    app.get("/api/tables", function(req, res) {
        res.json(tableData);
    });

    app.get("/api/waitlist", function(req, res) {
        res.json(waitListData);
    });
    app.post("/api/tables", function(req, res) {
        if (tableData.length < 5) {
            tableData.push(req.body);
            res.json(true);
        }
        else {
            waitListData.push(req.body);
            res.json(false);
        }
    });

    app.post("/api/clear", function(req, res) {
        tableData.length = 0;
        waitListData.length = 0;

        res.json({ ok: true });
    });
};