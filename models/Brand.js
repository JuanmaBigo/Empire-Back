import mongoose from 'mongoose'

const schema = new mongoose.Schema(
    {
        name: { type: String, required: true },
    },{
        timestamps: true
    }
)

const Brand = mongoose.model('brands', schema)

export default Brand