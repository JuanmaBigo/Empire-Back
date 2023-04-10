import Category from "../../models/Category.js";

const controller = {
    all: async (req, res, next) => {
        try {
            let categories = await Category.find()
            if (categories) {
                return res.status(200)
                          .json({
                            success: true,
                            message: "All categories",
                            response: categories
                          })
            } else {
                return res.status(200)
                .json({
                  success: true,
                  message: "There are not categories",
                  response: categories
                })
            }
            
        } catch (error) {
            next(error)
        }
    }
}

export default controller 