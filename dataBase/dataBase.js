const mongoose = require('mongoose')

const url = 'mongodb+srv://revanyo:382112@cluster0.uuykf.mongodb.net/entryList?retryWrites=true&w=majority'

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true });

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
        name: String,
        entry: String,
        likeCount: Number
    },
    {collection: 'people'},
)

const Person = mongoose.model('Person', PersonSchema);

module.exports = {Person}


