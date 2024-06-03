const mongoose = require("mongoose");

const VolunteerData = new mongoose.Schema({
    FName:{type:String,required:true},
    LName:{type:String,required:true},
    DOB:{type:String,required:true},
    Number:{type:String,required:true},
    Email:{type:String,required:true,unique:true},
    WhyYouWantToJoin:{type:String},
})

const Volunteer = mongoose.model("Volunteer",VolunteerData);  
module.exports = Volunteer;