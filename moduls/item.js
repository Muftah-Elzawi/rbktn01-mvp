const mongoose = require('mongoose')
const Schema = mongoose.Schema


//Create Schema

const ItemSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    data: {
        type: Date,
        default:Date.now
    }
})

module.exports = item = mongoose.model('item', ItemSchema)