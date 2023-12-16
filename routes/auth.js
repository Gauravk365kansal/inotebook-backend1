
const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    obj={
        a:'gauravkansal',
        age:27
    }
    res.json(obj)
})

module.exports = router