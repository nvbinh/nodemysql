'use strict';

var db,
    dbOptions = {
        host: 'localhost',
        user: 'root',
        password: '',
        port: 3306,
        database: 'nodejs'
    };

db = function() {
    return {
        config: function() {
            return connection(mysql, dbOptions, 'request');
        }
    };
};

module.exports = db();
