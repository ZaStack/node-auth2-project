const router = require('express').Router()

const Users = require('./model')
const restricted = require('../auth/token-validation')

router.get('/', restricted, (req, res) => {
    Users.find().then(users => {
        res.json(users)
    }).catch(err => res.send(err))
})

module.exports = router