const mysql = require('mysql');

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database:"nodejs"
});

con.connect((err) => {
    if (err) console.log(`Database Error ${err}`);
    else
        console.log("Database connected succesfully");
})

module.exports.con = con;