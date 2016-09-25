var express = require('express');
var router  = express.Router();
global.router = router;

var postgres     = require('../postgres/postgres');
var postgres  = new postgres();
global.postgres = postgres;


router.post('/getTasks', function(req, res, next) {
    postgres.getTasks(req.body, function(result){
            res.send(result);
        }
    );
});

router.post('/addTask', function(req, res, next) {
    postgres.addTask(req.body, function(response){
            console.log('response=' + response);
            res.send(response);
        }
    );
});

router.post('/updateTask', function(req, res, next) {
    postgres.updateTask(req.body, function(response){
            console.log('response=' + response);
            res.send(response);
        }
    );
});

module.exports = router;

