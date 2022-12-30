const express = require('express');
const router = express.Router();

const Notes = require('../models/Notes');

router.post('/',(req,res)=>{
    console.log(req.body);
    res.send('Notes connection');
    const notes = Notes(req.body);
    notes.save();
})

module.exports = router;