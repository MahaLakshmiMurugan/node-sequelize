const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const createError = require('http-errors');
const http = require('http');
// Set up the express app
const app = express();

app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


const models = require("./models");
models.sequelize.sync().then(function() {
    console.log('Database connected');
}).catch(function(err) {
    console.log(err, "Something went wrong");
})

require('./routes')(app);

app.get('*', (req, res) => res.status(200).send({
message: 'Welcome to the beginning of nothingness.',
}));
const port = parseInt(process.env.PORT, 10) || 4200;
app.set('port', port);
const server = http.createServer(app);
server.listen(port);
module.exports = app;