import Rim from "../../models/Rim.js"

const controller ={
  get_rims: async(req,res,next) =>{
    try{
      let query={}
      if(req.query.color_id){
        query.color_id=req.query.color_id.split(",")
      }
      let rim = await Rim.find(query)
      if(query){
        return res.status(200).json({
          success: true,
          rim,
        })
      }else{
        return res.status(400).json({
          success: false,
          message: "Rims not found"
      })
      }

    }catch(error){
      next(error)
    }
  }
}

export default controller
