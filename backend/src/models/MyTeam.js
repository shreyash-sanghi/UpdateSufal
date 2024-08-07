const mongoose = require("mongoose");

const Team = new mongoose.Schema({
    Name:{type:String,required:true},
    Position:{type:String,required:true},
    Gender:{type:String},
    Achivements:[],
    Awards:[],
    Speciality:{type:String},
    About:{type:String,required:true},
    FBId:{type:String},
    InstaId:{type:String},
    Vision:{type:String},
    Mission:{type:String},
    ProfilImage:{type:String},
    Number:{type:String,required:true},
    Linkdin:{type:String},
    Sequence:{type:Number},
})

const Myteam = mongoose.model("Myteam",Team);  
module.exports = Myteam;