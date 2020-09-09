const index = `SELECT * FROM habits ORDER BY id`;
const show = `SELECT * FROM habits WHERE id = $1 ORDER BY id`;
const create = `INSERT INTO habits (name, count, frequency, disable) VALUES ($1, $2, $3, $4, $5) RETURNING *`;
const update = `UPDATE habits SET count = count + 1 WHERE id = $1 RETURNING *`;
const updateDisable = `UPDATE habits SET disable = true WHERE id = $1 RETURNING *`;
const reverseDisable = `UPDATE habits SET disable = false WHERE id = $1 RETURNING *`;

const userIndex = `SELECT * FROM users ORDER BY id`;
const userShow = `SELECT * FROM users WHERE id = $1 ORDER BY id`;
const userCreate = `INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *`;
const userEmail = `SELECT * FROM users WHERE email = $1`;

module.exports = { index, show, create, update, updateDisable, reverseDisable, userIndex, userShow, userCreate, userEmail };