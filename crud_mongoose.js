const mongoose = require("mongoose")
const nameModel = require('./models/names_schema')

let url = 'mongodb://localhost:27017/personal_budgetdb';

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology:true})
    .then(()=>{
        console.log('Connected to database')
        //List All entries
        // nameModel.find({})
        //         .then((data)=>{
        //             console.log(data)
        //             mongoose.connection.close()
        //         })
        //         .catch((connectionError)=>{
        //             console.log(connectionError)
        //         })
        //Fetch one document
        // nameModel.find({id: 2})
        // .then((data)=>{
        //     console.log(data)
        //     mongoose.connection.close()
        // })
        // .catch((connectionError)=>{
        //     console.log(connectionError)
        // })
        //
        // nameModel.findById('5f95e4c762d8c8ec43480a09')
        // .then((data)=>{
        //     console.log(data)
        //     mongoose.connection.close()
        // })
        // .catch((connectionError)=>{
        //     console.log(connectionError)
        // })
        let newData = new nameModel({id:12, name: 'Testing mongoose'});
        nameModel.insertMany(newData)
        .then((data)=>{
            console.log(data)
            mongoose.connection.close()
        })
        .catch((connectionError)=>{
            console.log(connectionError)
        })
    })
    .catch((connectionError) => {
        console.log(connectionError)
    })