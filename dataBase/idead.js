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
        entries: [{ 
            type: Schema.Types.ObjectId, 
            ref: 'Entry' 
        }]
    },
    {collection: 'people'},
)

let EntrySchema = new Schema(
    {
        poster: String,
        date: Date,
        title: String,
        rating: Number,
        body: String,
    },
    {collection: 'entries'},
)

const Entry = mongoose.model('Entry', EntrySchema);
const Person = mongoose.model('Person', PersonSchema);

module.exports = {Entry, Person}


