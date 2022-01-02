const express = require('express')
const router = express.Router()

router.get('/comunidade', (req, res) => {
    res.render('comunidade.html')
})

module.exports = router