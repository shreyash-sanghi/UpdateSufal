const mongoose = require("mongoose");

const Events = new mongoose.Schema({
    VideoUrl:{type: String , required:true},
VideoDate:{type: String  ,required:true},
Videoimage:{type: String , required:true},
AboutVideo:{type: String , required:true},
});

const UplodeVideo = mongoose.model("MyVideo",Events);  
module.exports = UplodeVideo ;