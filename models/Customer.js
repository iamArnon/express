const mongoose = require('mongoose')
const CustomerSchema = new mongoose.Schema({
    Customer_id : Number,
    Name: String,
    Email: String,
    Updated_at : {type : Date , default : Date.now},
    Created_at : {type : Date , default : Date.now},
  });


  const Customer = mongoose.model('Customer', CustomerSchema);

  async function checkCustomer(){
    try {
      const count = await Customer.countDocuments({});
      if (count === 1 ){

      }else{
        const User = [{
          Customer_id : 1,
          Name: 'Arnon paekrathok',
          Email: 'teen@gmail.com',
        }]
        await Customer.insertMany(User)
        console.log('เพิ่มข้อมูลเสร็จสิ้น');
      }
    }catch (error){
      console.error(error)
    }
  }
  checkCustomer();
  
  module.exports = Customer;