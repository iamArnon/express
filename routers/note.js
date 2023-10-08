const express = require('express')
const Note = require('../models/Note')
const router = express.Router();

router.post('/',async(req,res)=>{
    try{
        const post = await Note.create(req.body)
        res.json(post)
    }catch(err){
        return res.status(500).json({error:err.message})
    }
    console.log(req.body);
})
router.get('/', async(req,res,)=>{
    try{
        const note = await Note.find();
        res.json(note);
    }catch(err){
        return (err)
    }
})

module.exports = router