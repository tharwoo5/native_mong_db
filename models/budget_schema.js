const mongoose = require('mongoose')

// validate it is number
// validate if value has been passed
// find by id --> document then then id is found --> you may use this id

const nameSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: true,
        uppercase: true
    },
    cost:{
        type: Number,
        required: true,
    },
    color:{
        type: String,
        required: true,
    }
},{collection: 'personal_budget_collection'})

module.exports = mongoose.model('personal_budget_collection', nameSchema)