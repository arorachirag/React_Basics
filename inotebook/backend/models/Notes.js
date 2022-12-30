const mongoose = require('mongoose');
const {Schema} = mongoose;
const noteSchema = new Schema({
    title : {type:String,required:true},
    description : {type:String,required:true},
    tag : {type:String,default:"General"},
    date : {type:String}
  });

  const Notes = mongoose.model('notes',noteSchema);
  Notes.createIndexes();
  module.exports = Notes;