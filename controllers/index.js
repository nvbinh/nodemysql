'use strict';


var IndexModel = require('../models/index');


module.exports = function (router) {

    var model;

    router.get('/', function (req, res) {
        // var Customer = MyAppModel.extend({
        //     tableName: "customer",
        // });
        // 
        // console.log(Customer.find('all', {fields: "name"}));
        
        
        var User = sequelize.define('user', {
            firstName: {
                type: Sequelize.STRING,
                field: 'first_name' // Will result in an attribute that is firstName when user facing but first_name in the database
            },
            lastName: {
                type: Sequelize.STRING
            }
        }, {
            freezeTableName: true // Model tableName will be the same as the model name
        });

        User.sync({force: true}).then(function () {
            // Table created
            return User.create({
                firstName: 'John',
                lastName: 'Hancock'
            });
        });
        
        model = new IndexModel(req);
        
        model.getData(function(data) {
            console.log(data);
        });
        
        res.render('index', model);
        
    });

};
