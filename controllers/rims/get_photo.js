import Car from "../../models/Car.js";
import Color from "../../models/Color.js"
import Rim from "../../models/Rim.js"

const controller ={
  get_photo: async(req,res,next) =>{
    try{
      let query={}
      if(req.query.car_id){
        query.car_id= req.query.car_id.split(",")
      }
      if(req.query.color_id){
        query.color_id=req.query.color_id.split(",")
      }
      if(req.query.rim_id){
        query.rim_id=req.query.rim_id.split(",")
      }
      let rim = await Rim.findById(req.query.rim_id)
      .select("photo")
      if (rim){
        return res.status(200).json({
          success: true,
          rim,
  
      })
      }else {
        return res.status(400).json({
            success: false,
            message: "rim not found"
        })
      }
    }catch(error){
      next(error)
    }
  }
}
export default controller
