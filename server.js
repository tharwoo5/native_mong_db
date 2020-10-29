const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongodb = require('mongodb').MongoClient;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = 3000;

const mongoose = require("mongoose")
const budgetModel = require('./models/budget_schema')

let url = 'mongodb://localhost:27017/personal_budgetdb';

// const mongoose = require("mongoose")
// const budgetModel = require('./models/budget_schema')
// let url = 'mongodb://localhost:27017/personal_budgetdb';
app.use('/', express.static('public'));

app.use(express.json());
app.get('/about', (req, res) => {
  res.send('This is my about page');
});

app.get('/budget', (req,res)=>{
  mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology:true})
       .then(()=>{
         budgetModel.find({})
          .then((data)=>{
              
              res.json(data);
              //console.log(data)
              mongoose.connection.close();
    })
          .catch((connectionError)=>{
              console.log(connectionError);
    });
  })
  .catch((connectionError)=>{
    console.log(connectionError);
  });
});

//post insert, put updates
app.post('/insertBudget', (req,res)=>{
    //console.log(req.body);
    mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology:true})
       .then(()=>{
          const newBudget = ({
           title: req.body.title,
           cost: req.body.cost,
           color: req.body.color
         });
        //console.log(newBudget)
         budgetModel.insertMany(newBudget)
         //console.log('budget inserted')
         .then((data)=> {
           res.json(data);
           mongoose.connection.close();
         })
         .catch((connectionError)=>{
           console.log(connectionError);
         });
        })
        .catch((connectionError)=>{
          console.log(connectionError);
        });
      });




app.listen(port, () => {
  console.log(`Serving at http://localhost:${port}`)
});

// mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology:true})
//     .then(()=>{
//         console.log('Connected to database')
//         List All entries
//         nameModel.find({})
//                 .then((data)=>{
//                     console.log(data)
//                     mongoose.connection.close()
//                 })
//                 .catch((connectionError)=>{
//                     console.log(connectionError)
//                 })
//         Fetch one document
//         nameModel.find({id: 2})
//         .then((data)=>{
//             console.log(data)
//             mongoose.connection.close()
//         })
//         .catch((connectionError)=>{
//             console.log(connectionError)
//         })
        
//         nameModel.findById('5f95e4c762d8c8ec43480a09')
//         .then((data)=>{
//             console.log(data)
//             mongoose.connection.close()
//         })
//         .catch((connectionError)=>{
//             console.log(connectionError)
//         })
//         let newData = new nameModel({title:'trevor', cost: 300, color: 400,});
//         nameModel.insertMany(newData)
//         .then((data)=>{
//             console.log(data)
//             mongoose.connection.close()
//         })
//         .catch((connectionError)=>{
//             console.log(connectionError)
//         })
//     })
//     .catch((connectionError) => {
//         console.log(connectionError)
//     })