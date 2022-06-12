const router = require('express').Router()
const Home = require('../Controller/HomeController')

router.get('/', Home.index)

module.exports = router;