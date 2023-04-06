import Car from "../../models/Car.js";

const controller ={
  get_all: async(req,res,next) =>{

  try{
    let car = await Car.find()
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