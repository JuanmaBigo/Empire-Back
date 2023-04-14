import Rim from "../../models/Rim.js";

const controller = {
    get_photo: async (req, res, next) => {
        try {
            let query = {}
            if(req.query.rim_id){
                query.rim_id = req.query.rim_id.split(",")
            }

            let rim = await Rim.findById(query)
            if (rim) {
                return res.status(200).json({
                    photo: rim.photo,
                    success: true,
                })
            }
            else {
                return res.status(400).json({
                    success: false,
                    message: "rim not found"
                })
            }
        } catch (error) {
            next(error)
        }

    }
}
export default controller