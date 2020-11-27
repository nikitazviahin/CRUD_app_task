const Pool = require("pg").Pool;

const pool = new Pool({
    user: 'test_user',
    password: '1',
    host: 'localhost',
    port: 5432,
    database: 'books_table'
})

module.exports = pool;