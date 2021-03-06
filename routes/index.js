const fs = require("fs");

module.exports = function (app, addon) {

    //fires after addon installation
    app.all('/installed', async function (req, res, next) {
        console.log("installation...")
        global.database.collection(global.JiraAccountInfoStore).findOne({"installed.clientKey": req.body.clientKey}, function (err, result) {
            if (err) console.log(err);
            if (!result) {
                global.database.collection(global.JiraAccountInfoStore).insertOne(req.body, async (err, res) => {
                    if (err) throw err;
                    next();
                });
            } else {
                global.database.collection(global.JiraAccountInfoStore).updateOne({"installed.clientKey": req.body.clientKey}, {$set: req.body}, function (err, res) {
                    next();
                });
            }
        });
    });

    app.get('/', function (req, res) {
        res.format({
            'text/html': function () {
                res.redirect('/atlassian-connect.json');
            },
            'application/json': function () {
                res.redirect('/atlassian-connect.json');
            }
        });
    });

    app.get('/main-page', async function (req, res) {
        let {GetData} = require("../service/getData");
        let result = await GetData();
        // console.log(result)
        res.render("main-page", {
            title: "Main page",
            result:result

        });
    });
    app.get('/getBoard/:board', async function (req, res) {
        let {getBoard} = require("../service/index");
        let board = req.params.board;
        getBoard(board)

        // console.log(board)
        res.redirect('/main-page')
    });
    app.post('/main-page', addon.checkValidToken(), async function (req, res) {
    });

    // load any additional files you have in routes and apply those to the app
    {
        var path = require('path');
        var files = fs.readdirSync("routes");
        for (var index in files) {
            var file = files[index];
            if (file === "index.js") continue;
            // skip non-javascript files
            if (path.extname(file) != ".js") continue;

            var routes = require("./" + path.basename(file));

            if (typeof routes === "function") {
                routes(app, addon);
            }
        }
    }
};

