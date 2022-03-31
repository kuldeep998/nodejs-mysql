const express = require('express');
const parser = require('body-parser');
const adminRouting = require('./routes/admin');
const app = express();

//const db = require('./database/db');
const db=require('./database/db');

app.use(parser.json())

app.get('/', (req, res) => {
    res.send("working code");
    res.end();
})


app.use("/api/v1", adminRouting.route);


app.listen(3000, () => {
    console.log(`listening port ${3000}`);
})