//Handles initial GET request for the homepage
//Handles POST method request for adding new items

const express = require('express')
const router = express.Router()
const homeController = require('../controllers/home')

router.get('/', homeController.getIndex) //read
router.post('/new', homeController.createItem) //create

module.exports = router