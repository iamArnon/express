const mongoose = require('mongoose')
const CategorySchema = new mongoose.Schema({
    
    Name : String,
    Description : String,
    Category_ID : Number,
  });

   const categories = mongoose.model('Category Note',CategorySchema)
    async function checkAndInsertCategories() {
      try {
          // นับจำนวนเอกสารในคอลเลกชัน Category
          const count = await categories.countDocuments({});
          
          if (count >= 3) {
              
          } else {

              const categories3 = [
                {
                  
                  Name: 'Daily',
                  Description: 'บันทึกรายการประจำวัน',
                  Category_ID: 1
                },
                {
                  
                  Name: 'TO-DO',
                  Description: 'สิ่งที่ต้องทำ',
                  Category_ID: 2
                },
                {
                  
                  Name: 'Note',
                  Description: 'โน๊ตบันทึกเรื่องราว',
                  Category_ID: 3
                }

              ];
  
              await categories.insertMany(categories3);
              console.log('เพิ่มข้อมูลสำเร็จ');
              //ตรงจะมีช่องโหว กรณีที่ถ้าหาก มีการลบ document สักตัวนึง แล้วกด get ใหม่ค่าที่ได้มันจะซ้ำ เช่นสมมติลบ note แล้ว get ใหม่ Daily จะถูกเพิ่มเข้ามา แล้วใน collection ก็จะเป็น Daily TO-DO Daily
          }
      } catch (error) {
          console.error( error);
      }
  }
  
  checkAndInsertCategories();
const Category = mongoose.model('Category Note', CategorySchema);
//console.log(Category);
module.exports = Category;