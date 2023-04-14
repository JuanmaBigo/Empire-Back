import  mongoose  from "mongoose";

const schema = new mongoose.Schema(
    {
     
        quantity: { type: Number, required: true },
        user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true },
        category_id: { type: mongoose.Schema.Types.ObjectId, ref: 'categories', required: true },
        car_id: { type: mongoose.Schema.Types.ObjectId, ref: 'cars', required: true },
        color_id: { type: mongoose.Schema.Types.ObjectId, ref: 'colors', required: true },
        rim_id: { type: mongoose.Schema.Types.ObjectId, ref: 'rims', required: true },
    },
    {
        timestamps: true,
        versionKey: false
    }

)


const Item = mongoose.model('items', schema)
export default Item