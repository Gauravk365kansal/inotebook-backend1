
const express = require('express');
const User = require('../models/User');
const user = User
const router = express.Router();
const { body, validationResult } = require('express-validator');

//Create a user using POST "api/auth/". Doesn't require auth
router.post('/',[
    body('name').isLength({ min: 3 }).withMessage('Name must be at least 3 characters long'),
    body('email').isEmail().withMessage('Invalid email address'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
], (req,res)=> {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
}).then(user => res.json(user))
.catch(err=>{console.log(err)
res.json({error:"Email is already in sytem",message: err.message})});

  
})

module.exports = router