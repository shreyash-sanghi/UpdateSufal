const mongoose = require("mongoose");

const Events = new mongoose.Schema({
ImageDate:{type: String  ,required:true},
Image:{type: String , required:true},
});

const UplodeVideo = mongoose.model("ImageWithDate",Events);  
module.exports = UplodeVideo ;