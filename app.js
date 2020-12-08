require('dotenv').config()
require('./models/mongoose')

const config = require('./config/config')
const port = process.env.PORT || 3001
const app = config.setUpServer()


app.listen(port, () => {
    console.log('SERVER ON - Porta: ' + port + '')
})