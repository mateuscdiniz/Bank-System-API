const mongoose = require('mongoose')

mongoose.connect(process.env.DB_CONNECT, { 'useNewUrlParser': true, 'useFindAndModify': false, 'useUnifiedTopology': true, 'useCreateIndex': true }, (err) => {
    if (err) return console.log(err)
    console.log('[connected to DB]')
})