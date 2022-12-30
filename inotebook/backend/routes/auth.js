const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/',(req,res)=>{
    console.log(req.body);
    res.send('Hello1');
    const users = User(req.body);
    users.save();
})

module.exports = router;