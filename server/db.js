const { Client } = require('pg');

const client = new Client({
    host: 'localhost',
    user: 'postgres',
    port: '5432',
    password: 'admin',
    database: 'postgres'
})

client.connect();

client.query('Select * from users', (err, res) => {
    if (err) throw err;
    console.log(res.rows)
})