const pool = require('../db/pool');

module.exports = {
    getAll: () => pool.query('SELECT * FROM users'),
    getById: (id) => pool.query('SELECT * FROM users WHERE id = $1', [id]),
    create: (name, email) => pool.query('INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *', [name, email]),
    update: (id, name, email) => pool.query('UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *', [name, email, id]),
    delete: (id) => pool.query('DELETE FROM users WHERE id = $1 RETURNING *', [id])
};
