// Express imports
const express = require('express')
const router = express.Router()

//Handlers
const accountHandler = require('./account/accountHandler')
const authHandler = require('./auth/authHandler')

// Routes in use
router.use('/bank', accountHandler)
router.use('/auth', authHandler)
router.use('/', (req, res) => {
    res.send('BANK SYSTEM')
})

// 404 setup
router.use('*', (req, res) => {
    res.status(404).send('Page Not Found')
})

module.exports = router