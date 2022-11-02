const router = require("express").Router()
const { LOGIN, SINGUP } = require('../controllers/userControllers')


router.post('/login', LOGIN)
router.post('/signup', SINGUP)

module.exports = router;
