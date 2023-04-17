import Rim from "../../models/Rim.js"

const controller = {
    get_car_photo: async (req, res, next) => {
        try {
            let rim = await Rim.findById(req.params.id)
                .select("photo")
            if (rim) {
                return res.status(200).json({
                    success: true,
                    rim,

                })
            } else {
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
