import mongoose from 'mongoose'

const schema = new mongoose.Schema(
    {
        name: { type: String, required: true },
    },{
        timestamps: true
    }
)

const Category = mongoose.model('categories', schema)

export default Category