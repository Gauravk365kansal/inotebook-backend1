
const express = require('express');
const User = require('../models/User');
const user = User
const router = express.Router();

//Create a user using POST "api/auth/". Doesn't require auth
router.post('/',(req,res)=>{
    console.log(req.body);
    const user = User(req.body);
    user.save();
    
})

module.exports = router