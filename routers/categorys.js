const express = require('express')
const Category = require('../models/Category.js')
const router = express.Router();

router.get('/',async(req,res)=>{
    
    try{
        const category = await Category.find().limit(3);
        res.json(category)
        console.log(category);
    }catch(err){
        return res.status(500).json({ error: err.message })
    }
   
})





router.get('/:id', async (req, res) => {
    const categoryId = req.params.id;

    try {
        const category = await Category.findOne({ Category_ID: categoryId });

        if (!category) {
            return res.status(404).json({ message: 'ไม่พบหมวดหมู่ที่ระบุ' });
        }

        res.json(category);
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
});



// router.put('/:id',async(req,res,next)=>{
//     try{
//         const post = await Category.findByIdAndUpdate(req.params.id,req.body)
//         res.json(post)
//     }catch (err){
//         return next(err)
//     }   
// })
module.exports = router