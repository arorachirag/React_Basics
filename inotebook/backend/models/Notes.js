const mongoose = require('mongoose');
const {Schema} = mongoose;
const noteSchema = new Schema({
    user : {type:mongoose.Schema.Types.ObjectId,ref:'user'},
    
    title : {type:String,required:true},
    description : {type:String,required:true},
    tag : {type:String,default:"General"},
    date : {type:String}
  });

  const Notes = mongoose.model('notes',noteSchema);
  // Notes.createIndexes();
  module.exports = Notes;