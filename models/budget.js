//Getting mongoose Schema
const mongoose = require('mongoose')
const { Schema } = mongoose;

//Defining Schema
const budgetSchema = new Schema({
    budgetType:{
        type: String,
        required: true,
        trim:true,
        lowercase: true,
    },
    budgetTypesType:{
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    },
    category :{
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    budgetReceivedThroughOrUsedOn:{
        type: String,
        required:true,
        trim:true,
        lowercase: true,
    },
    comments:{
        type: String,
        trim:true,
        maxLength: 500,
        lowercase: true,
    },
    amount:{
        type: Number,
        required: true,
        trim: true,
        min:1
    }
},{timestamps: true})

module.exports = mongoose.model("Budget", budgetSchema);