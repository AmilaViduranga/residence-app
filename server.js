const Express       = require("express");
const BodyParser    = require("body-parser");
const Routes        = require("./src/route/index");
const Cors          = require("cors");
const app = Express();

app.use(Cors());

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });
app.use(BodyParser.urlencoded({ extended: false }));
app.use(BodyParser.json());
app.use('/', Routes);

app.listen(8080, (err) => {
    if(err) {
        console.log(err);
        process.exit(-1);
    }
    console.log("Server listen port 8080");
});