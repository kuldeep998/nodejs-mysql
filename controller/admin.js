const db = require('../database/db');

async function createTable(req, res) {
    var sql = "CREATE TABLE admin (name VARCHAR(255), city VARCHAR(255))";
    const result1 = await db.con.query(sql, (err, result) => {
        if (err) throw err;
        return result;
    });
    res.send("Table created");
    res.end();
}

async function createDatabase(req, res) {
    const result = await db.con.query('create database nodejs');
    // console.log(result);
    res.send(JSON.stringify(result));
    res.end();
}

async function insertRecord(req, res) {
    let data = {
        name: "ritika",
        address: "Indore"
    }
    let qt = `insert into admin (name,city) values('${data.name}','${data.address}')`;
    const result = await db.con.query(qt);
    res.send("data inserted");
    res.end();
}


async function getRecord(req, res) {

    db.con.query("SELECT * FROM admin WHERE name = 'kuldeep'", function (err, result) {
        if (err) throw err;
        console.log(result);
    });
    res.send("data get");
    res.end();
}


async function deleteRecord(req, res) {
    db.con.query("delete * FROM admin WHERE name = 'mahima'", function (err, result) {
        if (err) throw err;
        console.log(result);
    });
    res.send("data get");
    res.end();
}


async function getAllRecord(req, res) {

    db.con.query("SELECT * FROM admin", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    });
    res.send("data fetched");
    res.end();
}


module.exports.createDatabase = createDatabase;
module.exports.createTable = createTable;
module.exports.insertRecord = insertRecord;
module.exports.getRecord = getRecord;
module.exports.deleteRecord = deleteRecord;
module.exports.getAllRecord = getAllRecord;
