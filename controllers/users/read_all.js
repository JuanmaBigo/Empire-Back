import User from "../../models/User.js";

const controller = {

    read_all: async(req, res) => {

      try{
        const users = await User.find()
        if(users){
          return res
          .status(200)
          .json({
            success:true,
            users: users
          });
        }else res.status(404).json('Users not found')

      }catch(error){
        console.log(error)
        res.status(500).json(error.message)
      }

        
    }

}

export default controller