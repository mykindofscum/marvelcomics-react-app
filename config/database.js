const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser:
true });

const db = mongoose.connection;

db.on('connected', function() {
    console.log(`DB connected to ${process.env.DATABASE_URL}`);
})