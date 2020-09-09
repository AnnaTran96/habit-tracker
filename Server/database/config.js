const { Pool } = require("pg");

const pool = new Pool({ database: 'tracker'});

function run(query, values, callback) {
    return pool.query(query, values, callback)
}

module.exports = { run, pool };