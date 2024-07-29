const mongoose = require("mongoose");

const Events = new mongoose.Schema({
    Photo:[]
});

const UplodeImage = mongoose.model("MyPhoto",Events);  
module.exports = UplodeImage ;