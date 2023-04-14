import Item from "../../models/Item.js";


const controller = {

    create: async (req,res,next) => {
        const { user } = req 
        try {
            let item = await Item.create({
                quantity: 1,
                user_id: user._id,
                category_id: req.body.category_id,
                car_id: req.body.car_id,
                color_id: req.body.color_id,
                rim_id: req.body.rim_id
            })
            return res
                .status(201)
                .json({
                    message: 'product added to cart!',
                    item
                })
        } catch (error) {
            next(error)
        }
    },

    getAll: async (req,res,next) => {
        const { user } = req 
        try {
            let item = await Item.find( { user_id: user._id })
                .populate("")
            return res
                .status(200)
                .json({
                    item
                })
        } catch (error) {
            next(error)
        }
    },

    update: async (req,res,next) => {
        try {
            let product = await Item.findByIdAndUpdate(
                req.params.id,
                { quantity: req.body.quantity}
                )
            if (product){
                return res 
                    .status(200)
                    .json({
                        message: 'Quantity updated',
                    })
            }
        } catch (error) {
            next(error)
        }
    },

    deleteOne: async (req,res,next) => {
        try {
            let item = await Item.deleteOne( {_id: req.params.id})
            if( item ){
                return res
                    .status(200)
                    .json({
                        message:'Item successfully deleted'
                    })
            }
        } catch (error) {
            next(error)
        }
    },

    deleteAll: async (req,res,next) => {
        const { user } = req
        try {
            await Item.deleteMany( { user_id: user._id})
            return res
                .status(200)
                .json({
                    message: 'Items successfully deleted'
                })
        } catch (error) {
            next(error)
        }
    }
}

export default controller