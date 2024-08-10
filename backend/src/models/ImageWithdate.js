const mongoose = require("mongoose");

const Events = new mongoose.Schema({
    ImageDate:{type: String  ,required:true},
    Images:[],
    });

const UplodeVideo = mongoose.model("ImageWithDate",Events);  
module.exports = UplodeVideo ;