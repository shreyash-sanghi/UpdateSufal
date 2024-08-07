const mongoose = require("mongoose");

const Events = new mongoose.Schema({
    Organization:{type:String,required:true},
    Duration:{type:String,required:true},
    Fee:{type:String,required:true},
    EventName:{type:String,required:true},
    Discreption:{type:String,required:true},
    Place:{type:String,required:true},
    EDate:{type:String,required:true},
    Time:{type:String,required:true},
    EventBanner:{type:String,required:true},
    CurrentConform:{type:Boolean,required:true},
    PastConform:{type:Boolean,required:true},   
    EventImage:[] ,
    ChiefGuest:[] 
})


const Event = mongoose.model("Events",Events);  
module.exports = Event;