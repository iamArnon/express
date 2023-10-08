const mongoose = require('mongoose')
const { ObjectId } = mongoose.Types
const NoteSchema = new mongoose.Schema({
    title: String,
    content : String,
    Customer_IDD : ObjectId,
    Category_IDD : ObjectId,
    Updated_at : {type : Date , default : Date.now},
    Created_at : {type : Date , default : Date.now}
    
  });

  const Note = mongoose.model('Note', NoteSchema);
try{
  Note.aggregate([{
    $lookup:{
      from:'Customers',
      localField:'Customer_IDD',//ชื่อของ Schema ของ Note
      foreignField:'_id',
      as : 'CustomerData'
    },
    $lookup:{
      from:'Category Note',
      localField:'Category_IDD',//ชื่อของ Schema ของ Note
      foreignField:'_id',
      as : 'CategoryData'
    }

    
  }])
}catch(err){
  console.error( err);
}
module.exports = Note;


  
  
