const express = require('express')
const History = require('../models/History_Note')
const router = express.Router();

router.get('/', async(req,res,)=>{
    try {
        // ดึงข้อมูลเอกสารทั้งหมดจากคอลเลคชัน "Note"
        const notes = await Note.find();

        // วนลูปผ่านเอกสาร "notes" ที่ดึงมาและสร้างเอกสาร "History_Note" สำหรับแต่ละเอกสาร
        const historyPromises = notes.map(async (note) => {
            const historyNote = new History({
                Note_ID: note._id,
                Created_at: new Date(),
            });
            await historyNote.save();
        });

        // รอให้เสร็จสิ้นการสร้างเอกสาร "History_Note" ทั้งหมด
        await Promise.all(historyPromises);

        res.json({ message: 'สร้างบันทึก "History_Note" เรียบร้อยแล้ว' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'เกิดข้อผิดพลาดในเซิร์ฟเวอร์' });
    }
})

module.exports = router