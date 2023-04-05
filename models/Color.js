import mongoose from 'mongoose'

const schema = new mongoose.Schema(
    {
        car_id: { type: mongoose.Types.ObjectId, ref: 'cars', required: true },
        name: { type: String, required: true },
        price_color: { type: Number, required: true },
    },{
        timestamps: true
    }
)

const Color = mongoose.model('colors', schema)

export default Color