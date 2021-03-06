global.isDbConnected = false;
var mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.Promise = require('bluebird');
var dbUri = 'mongodb://127.0.0.1:27017/appcoins'
mongoose.connect(dbUri, { useMongoClient: true })
    .then(function () {
        global.isDbConnected = true;
        console.log("");
        console.log(dbUri + ' connect success');
        console.log("");
    }, function (err) {
        console.log("");
        console.log(dbUri + ' connect fail');
        console.log("");
        console.log(err);
        console.log("");
    });