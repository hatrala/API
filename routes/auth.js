const express  = require('express')
const Router = express.Router()

const AuthController = require('../controllers/AuthController')
const router = require('./employee')

router.post('/register', AuthController.register)

module.exports = router
