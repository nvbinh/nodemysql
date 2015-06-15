// var mysqlModel = require('mysql-model');
Sequelize = require('sequelize');

var dbmodel = function() {
    return {
        config: function() {
            // MyAppModel = mysqlModel.createConnection({
            //     host     : 'localhost',
            //     user     : 'root',
            //     password : '',
            //     database : 'nodejs',
            // });
            // 
            // return MyAppModel;
            
            sequelize = new Sequelize('nodejs', 'root', '', {
                host: 'localhost',
                //dialect: 'mysql'|'mariadb'|'sqlite'|'postgres'|'mssql',
                pool: {
                    max: 5,
                    min: 0,
                    idle: 10000
                }
            });
            
            return sequelize;
        }
    };
}

module.exports = dbmodel();
