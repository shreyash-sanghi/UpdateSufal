import {React ,useState,useEffect}from "react";
import {ref,uploadBytes,getStorage ,getDownloadURL,deleteObject} from "firebase/storage";
import { useParams } from "react-router-dom";
import axios from "axios";
const ViewPastEvent = ()=>{
    const {eid} = useParams();
      //Show Event data
  const [initial, final] = useState({
    eid: "",
    EventName: "",
    Place: "",
    Time: "",
    EDate: "",
    EventBanner: "",
    Discreption: "",
    ImageName: "",
  })
  const [EventImage,setEventImage] = useState([]);
  const getdata = async () => {
    try {
      const data = await axios.get(`https://backendsufal-shreyash-sanghis-projects.vercel.app/get_past_event_data_byId/${eid}`);
      const result = data.data.result;
        const storage = getStorage();
        const imgref = ref(storage,`files/${result.EventBanner}`);
        getDownloadURL(imgref).then(async(url1) => {
          final({
              eid: result._id,
              EventName: result.EventName,
              Place: result.Place,
              Time: result.Time,
              EDate: result.EDate,
             EventBanner: url1,
            Discreption: result.Discreption, 
           ImageName: result.ImageName, 
            }
          )
      })

      result.EventImage.map((about)=>{
        const storage = getStorage();
        const imgref = ref(storage,`files/${about}`);
        getDownloadURL(imgref).then(async(url2) => {
           setEventImage((setdata)=>[
            ...setdata,url2
           ])
        })
      })
    } catch (error) {
      alert(error);
    }
  }

  //Use Effect
  useEffect(() => {
    getdata();
  }, [])
    return(
        <>
        
        </>
    )
}

export default ViewPastEvent;