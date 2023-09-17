const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://akash:umCZxw8lEsxqtGcp@cluster0.uknzscu.mongodb.net/?retryWrites=true&w=majority');

const connectParams={
    useNewUrlParser:true,
    useUnifiedTopology:true
}





const db = mongoose.connection

db.on('error', console.error.bind(console, 'error connecting to database'));

db.once('open', ()=>{
    console.log("successfully connected to database : mongoDB");
});

module.exports = mongoose;
