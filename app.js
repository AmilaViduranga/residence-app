const Express       = require("express");
const BodyParser    = require("body-parser");
const Routes        = require("./src/route/index");
const Cors          = require("cors");
const app = Express();
const expressSwagger = require('express-swagger-generator')(app);

let options = {
    swaggerDefinition: {
        info: {
            description: 'This is a sample server',
            title: 'Swagger',
            version: '1.0.0',
        },
        host: 'localhost:3000',
        basePath: '/v1',
        produces: [
            "application/json",
            "application/xml"
        ],
        schemes: ['http', 'https'],
        securityDefinitions: {
            JWT: {
                type: 'apiKey',
                in: 'header',
                name: 'Authorization',
                description: "",
            }
        }
    },
    basedir: __dirname, //app absolute path
    files: ['./routes/**/*.js'] //Path to the API handle folder
};

expressSwagger(options)
app.use(Cors());

app.use(BodyParser.urlencoded({ extended: false }));
app.use(BodyParser.json());
app.use('/', Routes);

app.listen(8083, 'localhost', (err) => {
    if(err) {
        console.log(err);
        process.exit(-1);
    }
    console.log("Server listen port 8083");
});