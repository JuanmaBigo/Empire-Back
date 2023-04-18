import Item from "../../models/Item.js";


const controller = {

    create: async (req,res,next) => {
        const { user } = req 
        try {
            let item = await Item.create({
                user_id: user._id,
                car_id: req.body.car_id,
                color_id: req.body.color_id,
                rim_id: req.body.rim_id,
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
            let item = await Item.find({ user_id: user._id, bought: false })
            .select('-__v')
            .populate('car_id', 'name photo price reservePrice stock')
            .populate('color_id', 'name price_color')
            .populate('rim_id', 'name price_rim photo ');
                // let totalReservation = item?.map((element) => ((element.car_id.reservePrice + element.color_id.price_color + element.rim_id.price_rim)));
                const total = item.reduce((acc, cur) => acc + cur.car_id.reservePrice + cur.color_id.price_color + cur.rim_id.price_rim, 0)
                // console.log(" Este es el precio total:  " + totalReservation)
            return res
                .status(200)
                .json({
                    item,
                    // totalReservation,
                    total
                })
        } catch (error) {
            next(error)
        }
    },

    // update: async (req,res,next) => {
    //     try {
    //         let product = await Item.findByIdAndUpdate(
    //             req.params.id,
    //             { quantity: req.body.quantity}
    //             )
    //         if (product){
    //             return res 
    //                 .status(200)
    //                 .json({
    //                     message: 'Quantity updated',
    //                 })
    //         }
    //     } catch (error) {
    //         next(error)
    //     }
    // },

    deleteOne: async (req,res,next) => {
        const { user } = req
        try {
            let item = await Item.deleteOne( {_id: req.params.id, user_id: req.user._id})
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