import mongoose from 'mongoose'

const schema = new mongoose.Schema(
    {
        name: { type: String, require: true },
        mail: { type: String, require: true },
        password: { type: String, require: true },
        is_online: { type: Boolean, require: true },
        is_admin: { type: Boolean, require: true },
    },{
        timestamps: true
    }
)

const User = mongoose.model('users',schema)
export default User
