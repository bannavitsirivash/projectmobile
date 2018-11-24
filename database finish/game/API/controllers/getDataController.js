var mysql = require('../models').database.select;
const getDataController = {};


getDataController.post = (request, response) => {
    // const { id } = request.body;
    // console.log(id);
    // var database = new mongoDB();
    // var myobj = { "data": { "id": id }, col: { "collecUsers": "users", "collecUsersData": "users-data" } };
    // database.select(myobj, (result) => {
    //     response.send(result);
    // });

    const { id } = request.body;
    console.log(id);
    var database = new mysql();
    var myobj = { "data": { "id": id } };
    database.select(myobj, (result) => {
        response.send(result);
    });
}


module.exports = getDataController;
console.log('Executing  getDataController.js');
