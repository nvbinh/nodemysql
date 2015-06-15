'use strict';

var express = require('express'),
    kraken = require('kraken-js'),
    options;

global.app = module.exports = express();
global.connection = require('express-myconnection'),
global.mysql = require('mysql'),
global.MyAppModel = null;
global.sequelize = null;
global.Sequelize = null;
options  = require('./lib/spec');
/*
 * Create and configure application. Also exports application instance for use by tests.
 * See https://github.com/krakenjs/kraken-js#options for additional configuration options.
 */
// options = {
//     onconfig: function (config, next) {
//         next(null, config);
//     }
// };

app.use(kraken(options));
app.on('start', function () {
    console.log('Application ready to serve requests.');
    console.log('Environment: %s', app.kraken.get('env:env'));
});
