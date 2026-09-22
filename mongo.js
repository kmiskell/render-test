const mongoose = require('mongoose')

if (process.argv.length < 3) {
    console.log('give password as an argument')
    process.exit()
}

const password = process.argv[2]

const url = `mongodb+srv://kyliamiskell_db_user:${password}@cluster0.yhznngn.mongodb.net/noteApp?appName=Cluster0`

mongoose.set('strictQuery', false)
mongoose.connect(url, {family: 4})
const notesSchema = new mongoose.Schema({
    content: String,
    important: Boolean,
})

const Note = mongoose.model('Note', notesSchema)

Note.find({ important: true }).then(result => {
    result.forEach(note => {
        console.log(note)
    })
    mongoose.connection.close()
})

//const note = new Note({
//    content: 'Mongoose makes things easy!',
//    important: true,
//})

//note.save().then(result => {
//    console.log('note saved!')
//    mongoose.connection.close()
//})