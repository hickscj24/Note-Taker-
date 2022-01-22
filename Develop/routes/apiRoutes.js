const router = require('express').Router();
const path = require('path');
const fs = require('fs')
const uuid = require('uuid')

router.get('/notes', function (req, res){
    //to get existing notes all syntax here
    res.sendFile(path.join(__dirname, '../db/db.json'))
});


router.post('/notes', function (req, res){
//to save notes all syntax in here

    console.log("hello this is me", req.body);

    var new_note_dict = req.body;
    new_note_dict.id = uuid.v4();

    console.log("new note: ", new_note_dict)
    var current_file_contents = fs.readFileSync(path.join(__dirname, '../db/db.json'), encoding='utf-8');
    console.log("current file contents (string):", current_file_contents)
    var note_list = JSON.parse(current_file_contents)
    console.log("note list as a dict: ", note_list)
    
    note_list.push(new_note_dict)

    fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(note_list))

    res.send(new_note_dict);
});



module.exports = router;

