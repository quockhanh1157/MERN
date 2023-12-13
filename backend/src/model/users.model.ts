import mongoose, { InferSchemaType, Schema, model } from "mongoose";

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
    permissionLevel: {
        type: Number,
        default: 1
    }
}, {
    timestamps: true
})

//Kieu theo schema
type User = InferSchemaType<typeof userSchema>

//export model
// export default model<User>('User', userSchema)

module.exports = mongoose.model<User>('User', userSchema)