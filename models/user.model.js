import mongoose from "mongoose";

const User = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        trim:true
    },
    email: {
        type: String,
        required: true,
        trim:true
    },
    password: {
        type: String,
        required: true,
        trim:true
    }
}, {
    timestamp:true
})
export default mongoose.models?.User || mongoose.model('User', User);