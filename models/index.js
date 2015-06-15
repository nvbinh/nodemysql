'use strict';

// module.exports = function IndexModel() {
//     return {
//         name: 'index'
//     };
// };

module.exports = function IndexModel(request) {
    var method = {};
    
    method.getData = function(callback) {
        var data;
        request.getConnection(function(err, connection) {
            console.log('Connected to MySQL Server');
            connection.query('SELECT * FROM customer', function(err, rows) {
                if (err)
                    console.log('Error Selecting : %s', err);
                // res.render('customers', {page_title: "Customer - Node.js", data: rows});
                callback(rows);
            });
        });
    };
    
    return {
        getData: method.getData
    };
};

//module.exports = new indexModel();
