import mongoose from "mongoose";

const Hotel = new mongoose.Schema({
    hotelName: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
        trim:true
    },
    description: {
        type: String,
        
    },
    policies: {
        type: String,
      
    },
    facilities: [{
        type: String,
    }],
    photos: [{
        type:String
    }]
}, {
    timestamp:true
})
export default mongoose.models?.Hotel || mongoose.model('Hotel', Hotel);