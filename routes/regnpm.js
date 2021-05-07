const router = require('express').Router()
const regnpmController = require('../controller/regnpm')

router.post('/insert', (req,res) => {
    regnpmController.create(req.body)
        .then(result => res.json(result))
        .catch(err => res.json(err))
})

router.get('/getAll', (req,res) => {
    regnpmController.getAll(req.body)
        .then(result => res.json(result))
        .catch(err => res.json(err))
})

router.get('/getbyid/:id', (req, res) => {
    regnpmController.getById(req.params.id)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

router.put('/update/:id', (req, res) => {
    regnpmController.update(req.params.id, req.body)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

router.put('/delete/:id', (req, res) => {
    regnpmController.delete(req.params.id)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

module.exports = router
