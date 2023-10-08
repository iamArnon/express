const mongoose = require(mongoose)
const { ObjectId } = mongoose.Types
const HistorySchema = new mongoose.Schema({
    Note_ID : Objectid,
    Created_at : {type : Date , default : Date.now},
  });
  
  const History = mongoose.model('History Note', HistorySchema);
  module.exports = History;