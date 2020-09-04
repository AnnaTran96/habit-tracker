const index = `SELECT * FROM habits`;
const show = `SELECT * FROM habits WHERE id = $1`;
const create = `INSERT INTO habits (name, count) VALUES ($1, $2) RETURNING *`;
const update = `UPDATE habits SET count = count + 1 WHERE id = $1 RETURNING *`;

module.exports = { index, show, create, update };