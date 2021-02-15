const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/entryList', {useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection

connection.once('open', (err) => {
    if(err) {
        throw err
    } else {
        console.log('Connected to MongoDB')
    }
})

let Schema = mongoose.Schema

let PersonSchema = new Schema(
    {
        name: {type: String, unique: true},
        entry: String,
        rating: Number
    },
    {collection: 'people'},
)

const Person = mongoose.model('Person', PersonSchema);

module.exports = {Person}


