const mongoose = require('mongoose')

// validate it is number
// validate if value has been passed
// find by id --> document then then id is found --> you may use this id

const nameSchema = new mongoose.Schema({
    id:{
        type: Number,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        trim: true,
        required: true,
        uppercase: true
    }

},{collection: 'personal_budget_collection'})

module.exports = mongoose.model('personal_budget_collection', nameSchema)