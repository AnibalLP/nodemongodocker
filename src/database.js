const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/mydatabase')
    .then(db => console.log('db es conectad'.db.connection.host))
    .catch(err => console.err)