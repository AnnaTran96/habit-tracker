const express = require('express');
const db = require('../database/config');
const { reverseDisable } = require('../database/queries');

const router = express.Router();


router.put('/:id', (req, res) => {
    db.run(reverseDisable, [req.params.id])
        .then(result => {
            const habit = result.rows[0]
            res.json({habit})
        })
        .catch(err => res.status(500).end())
})

module.exports = router;