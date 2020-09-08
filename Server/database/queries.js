const index = `SELECT * FROM habits ORDER BY id`;
const show = `SELECT * FROM habits WHERE id = $1 ORDER BY id`;
const create = `INSERT INTO habits (name, count, frequency) VALUES ($1, $2, $3) RETURNING *`;
const update = `UPDATE habits SET count = count + 1 WHERE id = $1 RETURNING *`;

module.exports = { index, show, create, update };