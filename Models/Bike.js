const mongoose = require('mongoose')

const BikeSchema = mongoose.Schema({

    lenderId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'lenders'
    },
    bikeName:{
        type:String,
        required:true
    },
    bikeDesc:{
        type:String,
        required:true
    },
    priceHour:{
        type:Number,
        required:true
    },
    priceDay:{
        type:Number,
        required:true
    },
    bookedStatus:{
        type:Boolean,
        required: true
    },
    bikeImgUrl:{
        type:String,
        required: true
    }
})

module.exports = mongoose.model('bikes',BikeSchema)