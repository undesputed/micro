const { EEXIST } = require('constants');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const routes = require('./api/Routes/routes');
routes(app);

app.listen(port, function(){
    console.log('Server running on port: ' + port);
})