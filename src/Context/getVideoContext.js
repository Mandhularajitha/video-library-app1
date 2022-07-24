import axios from "axios"

const getVideo =async(id) =>{
    try{
      let {data} = await axios.get(`/api/video/${id}`)
     if(data.video){
         return data.video
     }else{
         return {}
     }
    }
    catch(e){
        console.log("error occured",e)
    }
} 

export{getVideo}