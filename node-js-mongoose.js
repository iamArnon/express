// const express = require('express')
// var mongoose = require('mongoose');
// const app = express()
// const port = 3700

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })


 
// // make a connection 
// mongoose.connect('mongodb://localhost:27017/tutorialkart');
 
// // get reference to database
// var db = mongoose.connection;
 
// db.on('error', console.error.bind(console, 'connection error:'));
// db.on('error', console.error.bind(console, 'connection error:'));
 
// db.once('open',async function() {
//     console.log("Connection Successful!");
     
//     // define Schema
//     var BookSchema = mongoose.Schema({
//       name: String,
//       price: Number,
//       quantity: Number
//     });
 
//     // compile schema to model
//     var Book = mongoose.model('Book', BookSchema, 'bookstore');
 
//     // documents array
//     var books = [{ name: 'Mongoose Tutorial', price: 10, quantity: 25 },
//                     { name: 'NodeJS tutorial', price: 15, quantity: 5 },
//                     { name: 'MongoDB Tutorial', price: 20, quantity: 2 }];
 
//     // save multiple documents to the collection referenced by Book Model
//     try {
//         await Book.insertMany(books);
//         console.log("Multiple documents inserted to Collection");
//       } catch (err) {
//         console.error(err);
//       }
     
// });