var routes = require('express')();
var getDataController = require('./controllers/getDataController');

routes.get('/', (request, response) => {
    response.send('API');
});

routes.post('/select', getDataController.post);

module.exports = routes;
console.log('Executing  routes.js');