import Color from "../../models/Color.js";

const controller={
  get_colors: async(req,res,next)=>{
    try{
    let query={}
    if(req.query.car_id){
      query.car_id = req.query.car_id.split(",")
    }
    let color = await Color.find(query)
    if(color){
      return res.status(200).json({
        success: true,
        color,
      })
    }
    else {
      return res.status(400).json({
          success: false,
          message: "Colors not found"
      })
    }


  }catch(error){
    next(error)
  }
    
}}
export default controller