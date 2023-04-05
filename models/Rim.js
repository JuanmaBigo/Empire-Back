import mongoose from 'mongoose'

const schema = new mongoose.Schema(
    {
        color_id: { type: mongoose.Types.ObjectId, ref: 'colors' },
        name: { type: String, required: true },
        photo: { type: String, required: true },
        price_rim: { type: Number, required: true },
    },{
        timestamps: true
    }
)

const Rim = mongoose.model('rims', schema)

export default Rim