import Car from "../../models/Car.js";

const controller = {
    add_stock: async (req, res, next) => {
        try {

            let car = await Car.findById({ _id: req.body.id })
            car.stock = req.body.stock
            await car.save()
            if (car) {
                res.status(200).json({
                    success: true,
                    response: car
                })
            } else {
                res.status(400).json({
                    success: false,
                    response: 'Error obtaining car'
                })
            }

        } catch (err) {
            next(err)

        }
    }
}

export default controller