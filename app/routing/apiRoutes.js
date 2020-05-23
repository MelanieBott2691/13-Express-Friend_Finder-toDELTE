/* 4. Your apiRoutes.js file should contain two routes:

A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic. */

var path = require('path');
var friends = require("../data/friends.js");

// ========================================================== 
// ROUTING
// ==========================================================

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });
    app.post("/api/friends", function(req, res) {

    // --------------------- Create New Friend with survey input -------------------------
        var userInput = req.body;
        var userResponse = unserInput.scores;

        var matchName = "";
        var matchImage = "";
        var difference = 10000;

        for (var i = 0; i < friends.length; i++) {
            var diff = 0;
            for (var j = 0; j < friends.length; i++) {
                diff += Math.abs(friends[i].scores[j] - userResponse[j]);
            }
            if (diff < difference) {
                difference = diff;
                matchName = friends[i].name;
                matchImage =  friends[i].photo;
            }
        }
        friends.push(userInput);
        res.json({status: "OK", matchName: matchName, matchImage: matchImage});
    });
};

//         newFriend.routeName = newFriend.name.replace(/s+/g, "").toLowerCase();
//     });
//     app.post("/api/friends", function(req, res) {
//         if (tableData.length < 5) {
//             tableData.push(req.body);
//             res.json(true);
//         }
//         else {
//             waitListData.push(req.body);
//             res.json(false);
//         }
//     });

//     app.post("/api/clear", function(req, res) {
//         tableData.length = 0;
//         waitListData.length = 0;

//         res.json({ ok: true });
//     });
// };