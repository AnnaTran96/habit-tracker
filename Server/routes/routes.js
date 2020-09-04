const express = require('express');
const db = require('../database/config');
const { index, show, create, update } = require('../database/queries');

const router = express.Router();

router.get('/', (req, res) => {
    db.run(index)
        .then(response => {
            const habits = response.rows
            res.json({habits})
        })
        .catch(err => res.status(500).end())
})

router.get('/:id', (req, res) => {
    db.run(show, [req.params.id])
        .then(resp => {
            const habit = resp.rows
            res.json({habit})
        })
        .catch(err => res.status(500).end())
})

router.post('/', (req, res) => {
    db.run(create, [req.body.name, req.body.count])
        .then(result => {
            const habit = result.rows[0]
            res.status(201).json(habit)
        })
        .catch(err => res.status(500).end())
})

router.patch('/:id', (req, res) => {
    db.run(update, [req.params.id])
        .then(result => {
            const habit = result.rows[0]
            res.json({habit})
        })
        .catch(err => res.status(500).end())
})

module.exports = router;