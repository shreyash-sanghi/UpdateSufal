const express = require("express");
const router = new express.Router();
const Current = require("../models/Event");
const CurreateReg = require("../models/EventRegForm");
const mongoose = require("mongoose")
const cloudinary = require("cloudinary");
const verify = require("../midelware/userauth")

router.get("/get_current_event_data",async(req,res)=>{
    try {
       const result = await Current.find();
       res.status(202).json({result});
    } catch (error) {
       console.log(error);
       res.status(404).json({error});
    }
   })

router.get("/get_past_event_data",async(req,res)=>{
    try {
       const result = await Current.find({PastConform:true});
       res.status(202).json({result});
    } catch (error) {
       console.log(error);
       res.status(404).json({error});
    }
   })

router.get("/get_past_event_data_byId/:id",async(req,res)=>{
    try {
      const id = req.params.id;
       const result = await Current.findById(id);
       res.status(202).json({result});
    } catch (error) {
       console.log(error);
       res.status(404).json({error});
    }
   })


  router.post("/uplodeEventData",verify,async(req,res)=>{
    try {
       const {Organization,ChiefGuest,Duration,Fee,EventName,Discreption, Place, EDate,Time,EventBanner,CurrentConform,PastConform} = req.body;
      console.log(Organization)
       const result = await Current.create({
         Organization,Duration,Fee,ChiefGuest, EventName,Discreption, Place, EDate,Time,EventBanner,CurrentConform,PastConform
       })
       res.sendStatus(202);
    } catch (error) {
       console.log(error);
       res.status(404).json({error});
    }
   })

  router.post("/uplode_event_image/:id",verify,async(req,res)=>{
    try {
      const id = req.params.id;
      const arr = req.body.arr;
      console.log(arr)
    const result = await Current.findByIdAndUpdate(id,{
      EventImage:arr
    })
       res.sendStatus(202);
    } catch (error) {
       console.log(error);
       res.status(404).json({error});
    }
   })

   router.post("/send_to_past_event/:id",verify,async(req,res)=>{
      try{
         const id = req.params.id;
          const result = await Current.findByIdAndUpdate(id,{
            PastConform:true,
            CurrentConform:false
         });
          res.sendStatus(202);
      }catch(error){
         console.log(error);
        res.sendStatus(404);
      }
   })

   router.delete("/delete_all_registration/:id",verify,async(req,res)=>{
      try{
         const id = req.params.id;
          const result = await Current.findById(id);
          await Current.findByIdAndUpdate(id,{RegisterData:[]})
          res.sendStatus(202);
      }catch(error){
         console.log(error);
        res.sendStatus(404);
      }
   })


   router.delete("/delete_event/:id",verify,async(req,res)=>{
      try{
         const id = req.params.id;
         const data = await Current.findById(id);
          const result = await Current.findByIdAndDelete(id);
          res.sendStatus(202);
      }catch(error){
         console.log(error);
        res.sendStatus(404);
      }
   })


router.delete("/delete_register/:eid",verify,async(req,res)=>{
   try{
      const id = req.params.eid;
const result = await CurreateReg.findByIdAndDelete(id);
res.sendStatus(202);
   }catch(error){
      console.log(error);
      res.sendStatus(204);
   }
})


router.post("/save_register",async(req,res)=>{
   try{
      const {Name,Email,Number,WhyWeJoin,Address,Eid} = req.body;
       console.log(Name,Email,Number,WhyWeJoin,Address,Eid)
     await CurreateReg.create({Name,Email,Number,WhyWeJoin,Address,Eid});
res.sendStatus(202);
   }catch(error){
      console.log(error);
      res.sendStatus(404);
   }
})


router.get("/get_cad_data",async(req,res)=>{
   try{
const result = await Current.find();
res.status(202).json({result })
   }catch(error){
      console.log(error);
      res.sendStatus(202);
   }
})

router.get("/get_register_form/:id",async(req,res)=>{
   try{
      const id = req.params.id;
const result = await Current.findById(id);
res.status(202).json({result })
   }catch(error){
      console.log(error);
      res.sendStatus(202);
   }
})

router.get("/get_view_register/:id",async(req,res)=>{
   try{
      const id = req.params.id;
const result = await CurreateReg.find({Eid:id});
res.status(202).json({result})
   }catch(error){
      console.log(error);
      res.sendStatus(202);
   }
})

router.get("/get_registerdata_byid/:id",async(req,res)=>{
   try{
      const id = req.params.id;
const result = await Current.findById(id);
res.status(202).json({result})
   }catch(error){
      console.log(error);
      res.sendStatus(202);
   }
})


module.exports = router;