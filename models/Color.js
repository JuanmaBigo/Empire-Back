import mongoose from 'mongoose'

const schema = new mongoose.Schema(
    {
        name: { type: String, required: true },
    },{
        timestamps: true
    }
)

const Color = mongoose.model('colors', schema)

export default Color