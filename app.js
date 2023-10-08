const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/testDBB');
}
//นำเข้า routers
const indexrouters = require('./routers/index')
const Categoryrouters = require('./routers/categorys')
const customerrouters = require('./routers/custumers')
const noterouters = require('./routers/note')
const historyrouters = require('./routers/note')

//use body parser
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));
// app.use('/',indexrouters)
app.use('/category',Categoryrouters)
app.use('/custumer',customerrouters)
app.use('/note',noterouters)
app.use('/history',historyrouters)
const port = 3000

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})