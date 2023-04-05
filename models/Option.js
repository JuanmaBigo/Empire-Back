import mongoose from 'mongoose'

const schema = new mongoose.Schema(
    {
        car_id: { type: mongoose.Types.ObjectId, ref: 'cars', required: true },
        name: { type: String, required: true },
        price: { type: Number, required: true },
        photo: { type: String, required: true },
    },{
        timestamps: true
    }
)

const Option = mongoose.model('options',schema)
export default Option

