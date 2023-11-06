import { Timestamp } from "mongodb";
import { InferSchemaType, Schema, model } from "mongoose";

const noteSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: false
    }
}, {
    timestamps: true
})

type Note = InferSchemaType<typeof noteSchema>

export default model<Note>("Note", noteSchema)