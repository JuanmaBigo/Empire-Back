import mongoose from 'mongoose'

const schema = new mongoose.Schema(
    {
        name: {type:String, require: true},
        photo: { type: String, require: true },
        video: { type: String, require: true },
        description1: { type: String, require: true },
        description2: { type: String, require: true },
        photo_description1: { type: String, require: true },
        photo_description2: { type: String, require: true },
        price: { type: Number, require: true },
        hp: { type: Number, require: true },
        top_speed: { type: Number, require: true },
        acceleration: { type: Number, require: true },
        reservePrice: { type: Number, require: true },
        stock: { type: Number, require: true },
        brand_id: { type: mongoose.Types.ObjectId, ref: 'brands', required: true },
        category_id: { type: mongoose.Types.ObjectId, ref: 'categories', required: true },
    },{
        timestamps: true
    }
)

const Car = mongoose.model('cars',schema)
export default Car
