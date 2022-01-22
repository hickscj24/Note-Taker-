const router = require('express').Router();
const db = require('../db/db.json');


router.get('/notes', function (req, res){
    console.log('WE MAde it here', db)
    //to get existing notes all syntax here


});


router.post('/notes', function (req, res){
//to save notes all syntax in here


});



module.exports = router;