const mongoose = require('mongoose')

const HistorySchema = mongoose.Schema({

    lenderId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'lenders'
    },
    bikeName:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users'
    },
    startingTime:{
        type:String,
        required:true
    },
    endingTime:{
        type:Number,
        required:true
    }
})

module.exports = mongoose.model('history',HistorySchema)