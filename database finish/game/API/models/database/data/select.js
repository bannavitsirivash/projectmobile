var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "quizgame"
});

class select {
    constructor() {

    }

    select(myobj, callback) {
        con.query("SELECT * FROM data RIGHT JOIN answer ON data.id=answer.data_id AND data.id=" + myobj.data.id, function (err, result, fields) {
            if (err) throw err;
            var data = {};
            result.forEach(element => {
                if(element.proposition_game != null) {
                    data.usersData = element;
                }
             });
            // data.usersData = result;
            // con.destroy();
            return callback(JSON.stringify(data));
        });
    }

}

module.exports = select;