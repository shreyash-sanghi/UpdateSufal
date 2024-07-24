const express = require("express");
const router = new express.Router();
const AddTeam = require("../models/MyTeam");
const Volunteer = require("../models/Volunteer");
const cloudinary = require("cloudinary");

router.post("/save_team_data",async(req,res)=>{
    try {
       const {Name,Position,Gender,Achivements,Awards,Speciality,About,FBId,InstaId,Vision,Mission,ProfilImage,Number,Linkdin} = req.body;
       const result = await AddTeam.create({
         Name,Position,Gender,Achivements,Awards,Speciality,About,FBId,InstaId,Vision,Mission,ProfilImage,Number,Linkdin
       })
       res.sendStatus(202);
    } catch (error) {
       console.log(error);
       res.status(404).json({error});
    }
   })
router.post("/save_volunteer_data",async(req,res)=>{
    try {
       const {FName,LName,Email,Number,DOB,WhyYouWantToJoin} = req.body;
       const result = await Volunteer.create({
         FName,LName,Email,Number,DOB,WhyYouWantToJoin
       })
       res.sendStatus(202);
    } catch (error) {
       console.log(error);
       res.status(404).json({error});
    }
   })


router.get("/get_team_data",async(req,res)=>{
    try {
       const result = await AddTeam.find().sort({ Name: 1 });
       res.status(202).json({result});
    } catch (error) {
       console.log(error);
       res.status(404).json({error});
    }
   })
router.get("/getPerticulatTeamMember/:id",async(req,res)=>{
    try {
      const id = req.params.id;
       const result = await AddTeam.findById(id);
       res.status(202).json({result});
    } catch (error) {
       console.log(error);
       res.status(404).json({error});
    }
   })
router.get("/get_volunteer_data",async(req,res)=>{
    try {
       const result = await Volunteer.find();
       res.status(202).json({result});
    } catch (error) {
       console.log(error);
       res.status(404).json({error});
    }
   })


   router.post("/update_team_data/:id",async(req,res)=>{
      try {
        const id = req.params.id;
        const {Name,Position,Gender,AchivementsInputFields,AwardsInputFields,Speciality,About,FBId,InstaId,Vision,Mission,Number,Linkdin} = req.body;
           const result = await AddTeam.findByIdAndUpdate(id,{
              Name,Position,Gender,AchivementsInputFields,AwardsInputFields,Speciality,About,FBId,InstaId,Vision,Mission,Number,Linkdin
           });
         res.sendStatus(202);
      } catch (error) {
         console.log(error);
         res.status(404).json({error});
      }
     })
  router.post("/update_team_data_withProfile/:id",async(req,res)=>{
      try {
        const id = req.params.id;
        const {Name,Position,Gender,AchivementsInputFields,AwardsInputFields,Speciality,About,FBId,InstaId,Vision,Mission,Number,ProfilImage,Linkdin} = req.body;
           const result = await AddTeam.findByIdAndUpdate(id,{
              Name,Position,Gender,AchivementsInputFields,AwardsInputFields,Speciality,About,FBId,InstaId,Vision,Mission,Number,Linkdin,ProfilImage
           });
         res.sendStatus(202);
      } catch (error) {
         console.log(error);
         res.status(404).json({error});
      }
     })


router.get("/get_team_data_byid/:id",async(req,res)=>{
    try {
      const id = req.params.id;
       const result = await AddTeam.findById(id);
       
       res.status(202).json({result});
    } catch (error) {
       console.log(error);
       res.status(404).json({error});
    }
   })
   
   router.delete("/delete_previous_image/:pid",async(req,res)=>{
      try{
         const id = req.params.pid;
       cloudinary.v2.uploader.destroy(id,async(err,result)=>{
         console.log(err,result);
       });
          res.sendStatus(202);
      }catch(error){
         console.log(error);
        res.sendStatus(404);
      }
   })
   
   router.delete("/delete_team_member/:id",async(req,res)=>{
      try{
         const id = req.params.id;
      //  cloudinary.v2.uploader.destroy(public_id,async(err,result)=>{
      //    console.log(err,result);
      //  });
          await  AddTeam.findByIdAndDelete(id);
          res.sendStatus(202);
      }catch(error){
         console.log(error);
        res.sendStatus(404);
      }
   })

   router.delete("/delete_volunteer_member/:id",async(req,res)=>{
      try{
         const id = req.params.id;
          await  Volunteer.findByIdAndDelete(id);
          res.sendStatus(202);
      }catch(error){
         console.log(error);
        res.sendStatus(404);
      }
   })

module.exports = router;