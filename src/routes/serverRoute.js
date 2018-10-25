const route = app => {

    const express = require("express");
    const router = express.Router();
    const path = require('path');



    if (process.env.NODE_ENV === "production") {
        app.use(express.static(path.join(__dirname, 'build')));
    }

    // for local env, use /client/public folder
    else {
        app.use(express.static(path.join(__dirname, 'public')));
    }

    app.get('*', (request, response) => {
        response.sendFile(__dirname + '/build/index.html');
      });

};

module.exports = route; 