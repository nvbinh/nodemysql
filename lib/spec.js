'use strict';

var db = require('../lib/database');

var dbmodel = require('../lib/dbmodel');
    
var spec = function() {
    return {
        onconfig: function(config, next) {
            app.use(db.config());
            
            dbmodel.config();
            
            next(null, config);
        }
    };
}

module.exports = spec();
