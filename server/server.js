const express = require('express')
const path= require('path')
const db = require('../dataBase/dataBase.js')

const app = express()

app.use(express.json())
app.use(express.static(path.join(__dirname, '..', 'public')))

app.get('/people', (req, res) => {
    db.Person.find((err, data) =>{
        if(err) {
            res.status(400)
        } else {
            res.status(200)
            res.send(data)
        }
    })
})

app.post('/people', (req, res) => {
    let item = {
        name: req.body.name,
        entry: req.body.entry
    }
    db.Person.create(item, function(err, data){
        if (err) {
            res.status(400)
        } else {
            res.status(201)
            res.send(data)
        }
    })
})

app.get('/people/:id', (req, res)=>{
    let query = {_id: req.params.id}
    console.log(query)
    db.Person.findOne(query)
    .populate('entries').exec((err, data)=>{
        if (err) {
            console.log(err)
        } else {
            console.log(data)
            res.send(data)
        }
    })
})

app.delete('/people/:id', (req, res)=>{
    let query = {_id: req.params.id}
    console.log(req.params)
    db.Person.findByIdAndDelete(query, (err, data) =>{
        if(err) {
            res.status(400)
        } else {
            res.status(200)
            res.send(data)
        }
    })
})

app.put('/people/:id', (req, res) =>{
    let query = {_id: req.params.id}
    db.Person.findOneAndUpdate(query, {$inc: {likeCount: 1}}, (err, data)=>{
        if(err) {
            res.status(400)
        } else {
            res.status(200)
            res.send(data)
        }
    })
})

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server listening!`);
  });


