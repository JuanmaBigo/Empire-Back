import Car from "../../models/Car.js";
import Category  from "../../models/Category.js"
const controller ={
  get_all: async(req,res,next) =>{

  try{
    let query={}
    if(req.query.name){
      query.name = new RegExp(req.query.name.trim(),'i')
    }
    if(req.query.category){
      query.category_id = req.query.category.split(",")
    }

    let car = await Car.find(query)
    .populate("category_id")
    console.log(car)
    if (car){
      return res.status(200).json({
        success: true,
        car,

    })
    }else {
      return res.status(400).json({
          success: false,
          message: "Car not found"
      })
    }

  }catch(error){
    next(error);
  }
  }
}
export default controller