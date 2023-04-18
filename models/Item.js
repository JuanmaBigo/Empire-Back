import  mongoose  from "mongoose";

const schema = new mongoose.Schema(
    {
        user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true },
        car_id: { type: mongoose.Schema.Types.ObjectId, ref: 'cars', required: true },
        color_id: { type: mongoose.Schema.Types.ObjectId, ref: 'colors', required: true },
        rim_id: { type: mongoose.Schema.Types.ObjectId, ref: 'rims', required: true },
        bought: { type: Boolean, required: false, default: false }
    },
    {
        timestamps: true,
        versionKey: false
    }

)


const Item = mongoose.model('items', schema)
export default Item