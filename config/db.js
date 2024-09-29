const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'kriz', 
    password: '1212@Aa_1', 
    database: 'appdev'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL Database.');
});

module.exports = db;
