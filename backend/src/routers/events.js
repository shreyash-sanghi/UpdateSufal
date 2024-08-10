const express = require("express");
const router = new express.Router();
const Current = require("../models/Event");
const CurreateReg = require("../models/EventRegForm");
const MyPhoto = require("../models/MyPhoto");
const MyVideo = require("../models/MyVideo");
const ImageWithDate = require("../models/ImageWithdate");
const mongoose = require("mongoose")
const verify = require("../midelware/userauth")

router.get("/get_current_event_data", async (req, res) => {
   try {
      const result = await Current.find();
      res.status(202).json({ result });
   } catch (error) {
      console.log(error);
      res.status(404).json({ error });
   }
})

router.get("/get_past_event_data", async (req, res) => {
   try {
      const result = await Current.find({ PastConform: true });
      res.status(202).json({ result });
   } catch (error) {
      console.log(error);
      res.status(404).json({ error });
   }
})

router.get("/get_past_event_data_byId/:id", async (req, res) => {
   try {
      const id = req.params.id;
      const result = await Current.findById(id);
      res.status(202).json({ result });
   } catch (error) {
      console.log(error);
      res.status(404).json({ error });
   }
})


router.post("/uplodeEventData", verify, async (req, res) => {
   try {
      const { Organization, ChiefGuest, Duration, Fee, EventName, Discreption, Place, EDate, Time, EventBanner, CurrentConform, PastConform } = req.body;
      console.log(Organization)
      const result = await Current.create({
         Organization, Duration, Fee, ChiefGuest, EventName, Discreption, Place, EDate, Time, EventBanner, CurrentConform, PastConform
      })
      res.sendStatus(202);
   } catch (error) {
      console.log(error);
      res.status(404).json({ error });
   }
})

router.get("/get_my_photo", async (req, res) => {
   try {
      const response = await MyPhoto.findOne();
      res.status(202).json({response});
   } catch (error) {
      console.log(error);
      res.status(404).json({ error });
   }
})
router.get("/get_image_with_date_frontend", async (req, res) => {
   try {
      const result = await ImageWithDate.find();
      res.status(202).json({result});
   } catch (error) {
      console.log(error);
      res.status(404).json({ error });
   }
})
router.get("/get_image_with_date",verify, async (req, res) => {
   try {
      const result = await ImageWithDate.find();
      res.status(202).json({result});
   } catch (error) {
      console.log(error);
      res.status(404).json({ error });
   }
})
router.post("/set_image_with_date", verify, async (req, res) => {
   try {
      const { ImageDate,Images} = req.body;
      await ImageWithDate.create({ImageDate,Images});
        res.sendStatus(202);
   } catch (error) {
      console.log(error);
      res.status(404).json({ error });
   }
})
router.post("/delete_photo_with_date/:id", verify, async (req, res) => {
   try {
      const id = req.params.id;
      const ImgName = req.body.ImgName;
        const result =  await ImageWithDate.findById(id);
        if(result.Images.length <=1){
            await ImageWithDate.findByIdAndDelete(id)
        }
        else{
      const response =   result.Images.filter((info)=>info != ImgName);
        await ImageWithDate.updateOne({_id:id},{Images:response})
        }

           res.sendStatus(202);
   } catch (error) {
      console.log(error);
      res.status(404).json({ error });
   }
})
router.post("/set_my_video", verify, async (req, res) => {
   try {
       const { VideoUrl,VideoDate,Videoimage,AboutVideo} = req.body;
         await MyVideo.create({VideoUrl,VideoDate,Videoimage,AboutVideo});
           res.sendStatus(202);
   } catch (error) {
      console.log(error);
      res.status(404).json({ error });
   }
})
router.get("/get_my_video",  async (req, res) => {
   try {
        const result =  await MyVideo.find();
        console.log(result)
           res.status(202).json({result});
   } catch (error) {
      console.log(error);
      res.status(404).json({ error });
   }
})
router.post("/updateAnEvent/:id", verify, async (req, res) => {
   try {
      const id = req.params.id;
      const { ChiefGuest, EventName, Discreption, Place, Time, Organization, Duration, Fee} = req.body;
      const result = await Current.updateOne({_id:id},{ $set: { ChiefGuest, EventName, Discreption, Place, Time, Organization, Duration, Fee  } } )
      res.sendStatus(202);
   } catch (error) {
      console.log(error);
      res.status(404).json({ error });
   }
})
router.get("/getEventData/:id", verify, async (req, res) => {
   try {
      const id= req.params.id;
      const result = await Current.findById(id);
      res.status(202).json({result});
   } catch (error) {
      console.log(error);
      res.status(404).json({ error });
   }
})
router.delete("/delete_video/:id", verify, async (req, res) => {
   try {
      const id = req.params.id;
        const result =  await MyVideo.findByIdAndDelete(id);
           res.sendStatus(202);
   } catch (error) {
      console.log(error);
      res.status(404).json({ error });
   }
})
router.post("/uplode_photo", verify, async (req, res) => {
   try {
      const response = await MyPhoto.findOne();
      const arr = req.body.arr;
      // const NewArr =  
      if (response === null) {
         await MyPhoto.create({ Photo: arr })
      } else {
         const id = response.id;
         let UpdatePhoto = [];
         response.Photo.map((info) => {
            UpdatePhoto.push(info)
         })
         arr.map((info) => {
            UpdatePhoto.push(info)
         })
         console.log(UpdatePhoto)
         const result = await MyPhoto.findByIdAndUpdate(id, {
            Photo: UpdatePhoto
         })
      }
      res.sendStatus(202);
   } catch (error) {
      console.log(error);
      res.status(404).json({ error });
   }
})
router.post("/delete_my_photo", verify, async (req, res) => {
   try {
      const response = await MyPhoto.findOne();
      const id = response._id;
      const resultArray = req.body.resultArray;
         const result = await MyPhoto.findByIdAndUpdate(id, {
            Photo: resultArray
         })

      res.sendStatus(202);
   } catch (error) {
      console.log(error);
      res.status(404).json({ error });
   }
})
router.post("/uplode_event_image/:id", verify, async (req, res) => {
   try {
      const id = req.params.id;
      const arr = req.body.arr;
      const data = await Current.findById(id);
      const Images = data.EventImage;
      const TotalImage = [];
      Images.map((info)=>{
         TotalImage.push(info);
      })
      arr.map((info)=>{
         TotalImage.push(info);
      })
      const result = await Current.findByIdAndUpdate(id, {
         EventImage: TotalImage
      })
      res.sendStatus(202);
   } catch (error) {
      console.log(error);
      res.status(404).json({ error });
   }
})

router.post("/send_to_past_event/:id", verify, async (req, res) => {
   try {
      const id = req.params.id;
      const result = await Current.findByIdAndUpdate(id, {
         PastConform: true,
         CurrentConform: false
      });
      res.sendStatus(202);
   } catch (error) {
      console.log(error);
      res.sendStatus(404);
   }
})

router.delete("/delete_all_registration/:id", verify, async (req, res) => {
   try {
      const id = req.params.id;
      const result = await Current.findById(id);
      await Current.findByIdAndUpdate(id, { RegisterData: [] })
      res.sendStatus(202);
   } catch (error) {
      console.log(error);
      res.sendStatus(404);
   }
})


router.delete("/delete_event/:id", verify, async (req, res) => {
   try {
      const id = req.params.id;
      const data = await Current.findById(id);
      const result = await Current.findByIdAndDelete(id);
      res.sendStatus(202);
   } catch (error) {
      console.log(error);
      res.sendStatus(404);
   }
})


router.delete("/delete_register/:eid", verify, async (req, res) => {
   try {
      const id = req.params.eid;
      const result = await CurreateReg.findByIdAndDelete(id);
      res.sendStatus(202);
   } catch (error) {
      console.log(error);
      res.sendStatus(204);
   }
})


router.post("/save_register", async (req, res) => {
   try {
      const { Name, Email, Number, WhyWeJoin, Address, Eid } = req.body;
      console.log(Name, Email, Number, WhyWeJoin, Address, Eid)
      await CurreateReg.create({ Name, Email, Number, WhyWeJoin, Address, Eid });
      res.sendStatus(202);
   } catch (error) {
      console.log(error);
      res.sendStatus(404);
   }
})


router.get("/get_cad_data", async (req, res) => {
   try {
      const result = await Current.find();
      res.status(202).json({ result })
   } catch (error) {
      console.log(error);
      res.sendStatus(202);
   }
})

router.get("/get_register_form/:id", async (req, res) => {
   try {
      const id = req.params.id;
      const result = await Current.findById(id);
      res.status(202).json({ result })
   } catch (error) {
      console.log(error);
      res.sendStatus(202);
   }
})

router.get("/get_view_register/:id", async (req, res) => {
   try {
      const id = req.params.id;
      const result = await CurreateReg.find({ Eid: id });
      res.status(202).json({ result })
   } catch (error) {
      console.log(error);
      res.sendStatus(202);
   }
})

router.get("/get_registerdata_byid/:id", async (req, res) => {
   try {
      const id = req.params.id;
      const result = await Current.findById(id);
      res.status(202).json({ result })
   } catch (error) {
      console.log(error);
      res.sendStatus(202);
   }
})


module.exports = router;