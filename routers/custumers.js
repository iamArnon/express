const express = require('express')
const router = express.Router();

const Customer = require('../models/Customer');

router.get('/',async(req,res)=>{
    try{
        const customer = await Customer.find()
        res.json(customer)
        
    }catch(err){
        return res.status(500).json({error:err.message})
    }
})

module.exports = router